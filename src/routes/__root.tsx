import {
  Outlet,
  createRootRoute,
  createRootRouteWithContext,
} from '@tanstack/react-router'

import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import '../styles.css'
import Header from '#/components/layouts/header'
import type { QueryClient } from '@tanstack/react-query'
import { Toaster } from '@/components/ui/toast'
import type { IAuthStore } from '#/stores/useAuthStore'

interface MyRouterContext {
  queryClient: QueryClient
  auth: IAuthStore
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}
