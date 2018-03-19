package io.kotlintest.runner.junit5

import io.kotlintest.TestCaseContext
import org.junit.platform.engine.EngineExecutionListener
import org.junit.platform.engine.TestExecutionResult
import org.junit.runners.model.TestTimedOutException
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit

fun <CONTEXT> createInterceptorChain(
    interceptors: Iterable<(CONTEXT, () -> Unit) -> Unit>,
    initialInterceptor: (CONTEXT, () -> Unit) -> Unit): (CONTEXT, () -> Unit) -> Unit {
  return interceptors.reversed().fold(initialInterceptor) { a, b ->
    { context: CONTEXT, fn: () -> Unit ->
      b(context, { a.invoke(context, { fn() }) })
    }
  }
}

class TestCaseRunner(private val listener: EngineExecutionListener) {

  // TODO beautify
  fun runTest(descriptor: TestCaseDescriptor) {
    if (descriptor.testCase.isActive()) {
      val executor =
          if (descriptor.testCase.config.threads < 2) Executors.newSingleThreadExecutor()
          else Executors.newFixedThreadPool(descriptor.testCase.config.threads)
      listener.executionStarted(descriptor)
      val initialInterceptor = { context: TestCaseContext, test: () -> Unit ->
        descriptor.testCase.spec.interceptTestCase(context, { test() })
      }
      val testInterceptorChain = createInterceptorChain(descriptor.testCase.config.interceptors, initialInterceptor)
      val testCaseContext = TestCaseContext(descriptor.testCase.spec, descriptor.testCase)

      val errors = mutableListOf<Throwable>()

      for (j in 1..descriptor.testCase.config.invocations) {
        executor.execute {
          try {
            testInterceptorChain(testCaseContext, { descriptor.testCase.test() })
          } catch (t: Throwable) {
            errors.add(t)
          }
        }
      }

      executor.shutdown()
      val timeout = descriptor.testCase.config.timeout
      val terminated = executor.awaitTermination(timeout.seconds, TimeUnit.SECONDS)

      if (!terminated) {
        val error = TestTimedOutException(timeout.seconds, TimeUnit.SECONDS)
        listener.executionFinished(descriptor, TestExecutionResult.failed(error))
      } else if (errors.isEmpty()) {
        listener.executionFinished(descriptor, TestExecutionResult.successful())
      } else {
        listener.executionFinished(descriptor, TestExecutionResult.failed(errors.first()))
      }

    } else {
      listener.executionSkipped(descriptor, "Ignored")
    }
  }
}