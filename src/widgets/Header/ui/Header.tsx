import s from './Header.module.scss'
import { Nav } from './Nav'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className="containerBig">
        <Nav />
      </div>
    </header>
  )
}
