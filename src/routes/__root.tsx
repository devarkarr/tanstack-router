import { Outlet, createRootRoute } from '@tanstack/react-router'

import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import '../styles.css'
import Header from '#/components/layouts/header'

export const Route = createRootRoute({
  component: RootComponent,
  // errorComponent: ({ error }) => {
  //   // Render an error message
  //   return <div>{error instanceof Error ? error.message : String(error)}</div>
  // },
})

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
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
