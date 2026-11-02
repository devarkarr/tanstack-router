import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import Cookie from 'js-cookie'

export const Route = createFileRoute('/(auth)')({
  beforeLoad: () => {
    const token = Cookie.get('token')
    if (token) {
      throw redirect({ to: '/dashboard' })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
