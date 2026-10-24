import navLinks from '#/constant/navLinks'
import { Link } from '@tanstack/react-router'

const Header = () => {
  return (
    <header className="bg-blue-100">
      <ul className="flex items-center gap-2 ">
        {navLinks.map((link) => (
          <li key={link.link}>
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
