import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { useEffect, useState } from 'react'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import ClerkProvider from '../integrations/clerk/provider'

import appCss from '../styles.css?url'


import { ThemeProvider } from '../features/common/components/theme-provider'
import { UserSync } from '../features/auth/components/UserSync'
import type { QueryClient } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Jobinator',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: () => {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <p className="text-lg font-semibold">404: Page Not Found</p>
        <Button className="ml-4" asChild>
          <a href="/">Go Home</a>
        </Button>
      </div>
    )
  },
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {mounted ? (
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <ClerkProvider>
              <UserSync />
              {children}
              <TanStackDevtools
                config={{
                  position: 'bottom-right',
                }}
                plugins={[
                  {
                    name: 'Tanstack Router',
                    render: <TanStackRouterDevtoolsPanel />,
                  },
                  TanStackQueryDevtools,
                ]}
              />
            </ClerkProvider>
          </ThemeProvider>
        ) : (
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
        <Scripts />
      </body>
    </html>
  )
}
