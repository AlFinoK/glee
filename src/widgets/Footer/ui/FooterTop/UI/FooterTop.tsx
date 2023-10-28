import { Link } from 'react-router-dom'
import { FooterForm } from 'shared/ui/FooterForm'
import s from './FooterTop.module.scss'
import logoSvg from 'assets/images/icons/logo.svg'

export const FooterTop = () => {
  return (
    <div className={s.footerTop}>
      <div className={s.footerTop__contacts}>
        <Link className={s.footerTop__logo} to="/">
          <img className={s.footerTop__logoImg} src={logoSvg} alt="logo" />
          <span className={s.footerTop__logoName}>Glee.</span>
        </Link>
        <a className={s.footerTop__phone} href="tel:+832-347-5843">
          Telephone: +832-347-5843
        </a>
        <a href="mailto:contactGlee.com">Email: gleegmail.com</a>
      </div>
      <div className={s.footerTop__services}>
        <h6 className={s.footerTop__title}>Services</h6>
        <ul>
          <li className={s.footerTop__item}>
            <Link className={s.footerTop__link} to="/about">
              About us
            </Link>
          </li>
          <li className={s.footerTop__item}>
            <Link className={s.footerTop__link} to="/">
              Return Policy
            </Link>
          </li>
          <li className={s.footerTop__item}>
            <Link className={s.footerTop__link} to="/blog">
              Our Blog
            </Link>
          </li>
          <li className={s.footerTop__item}>
            <Link className={s.footerTop__link} to="/contacts">
              Contact Us
            </Link>
          </li>
          <li className={s.footerTop__item}>
            <Link className={s.footerTop__link} to="/">
              Terms & Condition
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.footerTop__account}>
        <h6 className={s.footerTop__title}>Account</h6>
        <ul className={s.footerTop__list}>
          <li className={s.footerTop__item}>
            <Link className={s.footerTop__link} to="/login">
              Your Account
            </Link>
          </li>
          <li className={s.footerTop__item}>
            <Link className={s.footerTop__link} to="/">
              Checkout
            </Link>
          </li>
          <li className={s.footerTop__item}>
            <Link className={s.footerTop__link} to="/login">
              Login
            </Link>
          </li>
          <li className={s.footerTop__item}>
            <Link className={s.footerTop__link} to="/login">
              Register
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.footerTop__form}>
        <h6 className={s.footerTop__title}>newsletter</h6>
        <p className={s.footerTop__text}>Subscribe by our newsletter and get update protidin.</p>
        <FooterForm />
      </div>
    </div>
  )
}
