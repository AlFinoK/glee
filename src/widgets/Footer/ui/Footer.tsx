import { Link } from 'react-router-dom'

import s from './Footer.module.scss'
import { FooterForm } from 'shared/ui/FooterForm'
import { FooterTop } from './FooterTop'
import { FooterBottom } from './FooterBottom'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  )
}
