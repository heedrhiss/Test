"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster 
      position="top-center"
      containerStyle={{margin: "8px"}}
      toastOptions={{
        success: {
          duration: 3000
        },
        error: {
          duration: 5000
        },
        style: {
          padding: '5px',
          background: "var(--color-grey-0)",
          color: "var(--color-grey-700)"
        }
      }
      }/>
    </QueryClientProvider>
  );
}
