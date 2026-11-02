import { meQueryOptions } from '#/services/auth/queries'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'

const DashboardPage = () => {
  const { data } = useSuspenseQuery(meQueryOptions)
  return (
    <div>
      <p className="text-2xl">{data.username}</p>
    <p className="text-2xl">{data.email}</p>
    </div>
  )
}

export default DashboardPage
