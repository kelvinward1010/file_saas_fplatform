"use client"

import { useState } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { trpc } from "@/app/_trpc/client";
import { httpBatchLink } from "@trpc/client";

interface ProviderProps{
    children: React.ReactNode
}

export const Providers: React.FC<ProviderProps> = ({
    children
}) => {
    const [ queryClient ] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: 'http://localhost:3000/api/trpc'
            })
        ]
    }));

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}

