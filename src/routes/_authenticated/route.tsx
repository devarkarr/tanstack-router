import {
  createFileRoute,
  Outlet,
  redirect,
  useNavigate,
} from '@tanstack/react-router'
import Cookies from 'js-cookie'
import { meQueryOptions } from '#/services/auth/queries'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context: { queryClient } }) => {
    const token = Cookies.get('token')
    if (!token) {
      throw redirect({ to: '/login' })
    }

    try {
      await queryClient.ensureQueryData(meQueryOptions)
    } catch (error) {
      Cookies.remove('token')
      throw redirect({ to: '/login' })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  //   const { isError } = useMeQuery()

  return <Outlet />
}
