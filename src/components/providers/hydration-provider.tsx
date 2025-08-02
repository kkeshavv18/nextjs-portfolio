"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/contexts/theme-context";

interface HydrationProviderProps {
  children: React.ReactNode;
  initialData?: Record<string, any>;
}

export function HydrationProvider({
  children,
  initialData = {},
}: HydrationProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            gcTime: 10 * 60 * 1000, // 10 minutes
            retry: 1,
          },
        },
      })
  );

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Hydrate the query client with initial data
    if (initialData.mediumPosts) {
      queryClient.setQueryData(["medium-posts"], initialData.mediumPosts);
    }
    setIsHydrated(true);
  }, [queryClient, initialData]);

  if (!isHydrated) {
    return null; // or a loading spinner
  }

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
