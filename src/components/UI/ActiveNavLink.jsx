import { Link, useMatch } from 'react-router-dom'
import style from './ActiveNavLink.module.scss'

const ActiveNavLink = ({ children, to, ...props }) => {
  const match = useMatch(to)
  return (
    <Link to={to} className={match ? style.ActiveNavLink : ''} {...props}>
      {children}
    </Link>
  )
}

export default ActiveNavLink
