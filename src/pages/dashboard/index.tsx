import useAuthStore from '#/stores/useAuthStore'

const DashboardPage = () => {
  const { user } = useAuthStore()
  return (
    <div>
      <p className="text-2xl">{user?.username}</p>
      <p className="text-2xl">{user?.email}</p>
    </div>
  )
}

export default DashboardPage
