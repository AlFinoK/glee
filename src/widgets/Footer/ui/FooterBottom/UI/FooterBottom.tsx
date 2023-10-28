import { Link } from 'react-router-dom'
import s from './FooterBottom.module.scss'

export const FooterBottom = () => {
  return (
    <div className={s.footerBottom}>
      <div>©2020 CopyRight Example. All rights reserved.</div>
      <div>
        <Link className={s.footerBottom__link} to="/">
          Home
        </Link>
        <Link className={s.footerBottom__link} to="/about">
          About
        </Link>
        <Link className={s.footerBottom__link} to="/blog">
          Blog
        </Link>
        <Link className={s.footerBottom__link} to="/contacts">
          Contact
        </Link>
      </div>
    </div>
  )
}
