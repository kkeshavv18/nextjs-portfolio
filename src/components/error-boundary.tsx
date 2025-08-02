"use client";

import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Button } from "@/components/ui/button";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We're sorry, but something unexpected happened. Please try again.
          </p>
        </div>

        <div className="space-y-4">
          <Button onClick={resetErrorBoundary} className="w-full">
            Try again
          </Button>

          <details className="text-left">
            <summary className="cursor-pointer text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Error details
            </summary>
            <pre className="mt-2 text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        </div>
      </div>
    </div>
  );
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<ErrorFallbackProps>;
}

export function ErrorBoundary({
  children,
  fallback = ErrorFallback,
}: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary
      FallbackComponent={fallback}
      onError={(error, errorInfo) => {
        console.error("Error caught by boundary:", error, errorInfo);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
