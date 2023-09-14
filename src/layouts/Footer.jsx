import { NavLink } from 'react-router-dom'
import logoSvg from '../assets/images/icons/logo.svg'

const Footer = () => {
  return (
    <footer className="footer text-sm">
      <div className="container">
        <div className="footer-top">
          <div className="footer-top__contacts">
            <NavLink className="footer-top__logo" to="/">
              <img className="footer-top__logo-img" src={logoSvg} alt="logo" />
              <span className="footer-top__logo-name">Glee.</span>
            </NavLink>
            <NavLink className="footer-top__phone" to="tel:+832-347-5843">
              Telephone: +832-347-5843
            </NavLink>
            <NavLink className="footer-top__email" to="mailto:contact@Glee.com">
              Email: glee@gmail.com
            </NavLink>
          </div>
          <div className="footer-top__services">
            <h6 className="footer-top__title">Services</h6>
            <ul className="footer-top__list">
              <li className="footer-top__item">
                <NavLink className="footer-top__link" to="/about">
                  About us
                </NavLink>
              </li>
              <li className="footer-top__item">
                <NavLink className="footer-top__link" to="/">
                  Return Policy
                </NavLink>
              </li>
              <li className="footer-top__item">
                <NavLink className="footer-top__link" to="/blog">
                  Our Blog
                </NavLink>
              </li>
              <li className="footer-top__item">
                <NavLink className="footer-top__link" to="/contacts">
                  Contact Us
                </NavLink>
              </li>
              <li className="footer-top__item">
                <NavLink className="footer-top__link" to="/">
                  Terms & Condition
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-top__account">
            <h6 className="footer-top__title">Account</h6>
            <ul className="footer-top__list">
              <li className="footer-top__item">
                <NavLink className="footer-top__link" to="/login">
                  Your Account
                </NavLink>
              </li>
              <li className="footer-top__item">
                <NavLink className="footer-top__link" to="/">
                  Checkout
                </NavLink>
              </li>
              <li className="footer-top__item">
                <NavLink className="footer-top__link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="footer-top__item">
                <NavLink className="footer-top__link" to="/login">
                  Register
                </NavLink>
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
            <NavLink className="footer-bottom__link" to="/home">
              Home
            </NavLink>
            <NavLink className="footer-bottom__link" to="/about">
              About
            </NavLink>
            <NavLink className="footer-bottom__link" to="/blog">
              Blog
            </NavLink>
            <NavLink className="footer-bottom__link" to="/contacts">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
