import { Outlet } from '@tanstack/react-router'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import AppSidebar from './app-sidebar'

const AuthLayout = () => {
  return (
    <SidebarProvider
    // style={
    //   {
    //     '--sidebar-width': '20rem',
    //     '--sidebar-width-mobile': '20rem',
    //   } as React.CSSProperties
    // }
    >
      <AppSidebar />

      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

export default AuthLayout
