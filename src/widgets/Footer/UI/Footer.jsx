import { Link } from 'react-router-dom'

import logoSvg from 'logo.svg'
import s from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top__contacts">
            <Link className="footer-top__logo" to="/">
              <img className="footer-top__logo-img" src={logoSvg} alt="logo" />
              <span className="footer-top__logo-name">Glee.</span>
            </Link>
            <a className="footer-top__phone" href="tel:+832-347-5843">
              Telephone: +832-347-5843
            </a>
            <a className="footer-top__email" href="mailto:contactGlee.com">
              Email: gleegmail.com
            </a>
          </div>
          <div className="footer-top__services">
            <h6 className="footer-top__title">Services</h6>
            <ul className="footer-top__list">
              <li className="footer-top__item">
                <Link className="footer-top__link" to="/about">
                  About us
                </Link>
              </li>
              <li className="footer-top__item">
                <Link className="footer-top__link" to="/">
                  Return Policy
                </Link>
              </li>
              <li className="footer-top__item">
                <Link className="footer-top__link" to="/blog">
                  Our Blog
                </Link>
              </li>
              <li className="footer-top__item">
                <Link className="footer-top__link" to="/contacts">
                  Contact Us
                </Link>
              </li>
              <li className="footer-top__item">
                <Link className="footer-top__link" to="/">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-top__account">
            <h6 className="footer-top__title">Account</h6>
            <ul className="footer-top__list">
              <li className="footer-top__item">
                <Link className="footer-top__link" to="/login">
                  Your Account
                </Link>
              </li>
              <li className="footer-top__item">
                <Link className="footer-top__link" to="/">
                  Checkout
                </Link>
              </li>
              <li className="footer-top__item">
                <Link className="footer-top__link" to="/login">
                  Login
                </Link>
              </li>
              <li className="footer-top__item">
                <Link className="footer-top__link" to="/login">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-top__form">
            <h6 className="footer-top__title">newsletter</h6>
            <p className="footer-top__text">Subscribe by our newsletter and get update protidin.</p>
            <form className="form" action="#">
              <input className="form__input" type="email" required placeholder="Email address" />
              <button className="form__btn" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom__copy">©2020 CopyRight Example. All rights reserved.</div>
          <div className="footer-bottom__nav">
            <Link className="footer-bottom__link" to="/">
              Home
            </Link>
            <Link className="footer-bottom__link" to="/about">
              About
            </Link>
            <Link className="footer-bottom__link" to="/blog">
              Blog
            </Link>
            <Link className="footer-bottom__link" to="/contacts">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
