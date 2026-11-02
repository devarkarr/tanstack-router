import navLinks from '#/constant/navLinks'
import { Link, useNavigate } from '@tanstack/react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useSuspenseQuery } from '@tanstack/react-query'
import { meQueryOptions } from '#/services/auth/queries'
import Cookies from 'js-cookie'

const Header = () => {
  // const { data } = useSuspenseQuery(meQueryOptions)
  const navigate = useNavigate()

  const logout = () => {
    Cookies.remove('token')
    navigate({ to: '/login' })
  }
  return (
    <header className="bg-blue-100 flex justify-between max-w-6xl mx-auto ">
      <ul className="flex items-center gap-2 ">
        {navLinks.map((link) => (
          <li key={link.link}>
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>

      {/* {false && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )} */}
    </header>
  )
}

export default Header
