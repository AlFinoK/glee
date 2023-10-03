import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logoSvg from '@logo.svg'
import FavoriteSvg from '@assets/images/icons/favorite.svg'
import CartSvg from '@assets/images/icons/cart.svg'
import MenuList from '@widgets/MenuList'
import s from './styles.module.scss'

const Header = () => {
  const [isOpenBurger, SetOpenBurger] = useState(false)

  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cashReducer.cash)
  const customers = useSelector((state) => state.customersReducer.customers)

  const plusNumber = () => {
    dispatch({ type: 'ADD_CASH', payload: 1 })
  }

  const minusNumber = () => {
    dispatch({ type: 'GET_CASH', payload: 1 })
  }

  return (
    <header className="header">
      <div className="container-big">
        <nav className="menu">
          <Link className="menu__logo" to="/">
            <img className="menu__logo-img" src={logoSvg} alt="logo" />
            <span className="menu__logo-name">Glee.</span>
          </Link>
          <MenuList />
          {/* <div className="menu__icons">
            <div className="menu__search">
              <input className="menu__input" placeholder="What are you looking for?" />
              <svg
                className="relative right-8"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16">
                <path
                  fill="#243f4d"
                  d="M3.702 6.076c.356-.065.68.13.746.484.096.582.355 1.067.78 1.49.42.388.941.677 1.493.776.325.066.552.39.487.743a.643.643 0 0 1-.714.516 4.2 4.2 0 0 1-2.143-1.13 4.164 4.164 0 0 1-1.136-2.137c-.065-.354.128-.676.487-.742zM6.98-.004c3.465 0 6.279 2.8 6.279 6.257 0 .93-.203 1.812-.568 2.604l2.336 2.036c1.703 1.747.746 3.266.294 3.717-.422.454-1.994 1.415-3.73-.292l-2.06-2.35c-.78.345-1.64.539-2.548.539-3.468 0-6.278-2.802-6.278-6.257 0-3.456 2.807-6.254 6.275-6.254zm5.546 13.517c.293.324 1.126.867 1.88.226.21-.176.634-1.068-.227-1.873l-2.162-1.88a6.269 6.269 0 0 1-1.363 1.34zM6.98 11.201c2.742 0 4.966-2.216 4.966-4.948S9.722 1.305 6.98 1.305 2.015 3.521 2.015 6.253s2.22 4.948 4.965 4.948z"
                />
              </svg>
            </div>
            <div className="menu__icons-box">
              <button className="menu__icon-box" onClick={() => plusNumber()}>
                <img src={FavoriteSvg} alt="favorite" />
                <span className="menu__icon-number">{cash}</span>
              </button>
              <button className="menu__icon-box" onClick={() => minusNumber()}>
                <img src={CartSvg} alt="cart" />
                <span className="menu__icon-number">{cash}</span>
              </button>
            </div>

            <div className="menu__burger" onClick={() => SetOpenBurger(!isOpenBurger)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
                <g>
                  <g>
                    <path
                      fill="#fff"
                      d="M2.146 4.88A2.144 2.144 0 0 1 0 2.735C0 1.548.96.589 2.146.589c1.187 0 2.146.96 2.146 2.146S3.332 4.88 2.146 4.88zm0 7.87A2.145 2.145 0 0 1 0 10.603c0-1.186.96-2.145 2.146-2.145 1.187 0 2.146.959 2.146 2.145 0 1.187-.96 2.147-2.146 2.147zm0 7.867A2.144 2.144 0 0 1 0 18.472c0-1.187.96-2.146 2.146-2.146 1.187 0 2.146.96 2.146 2.146 0 1.187-.96 2.145-2.146 2.145zM10.014 4.88a2.144 2.144 0 0 1-2.146-2.145c0-1.187.96-2.146 2.146-2.146 1.187 0 2.146.96 2.146 2.146s-.959 2.145-2.146 2.145zm0 7.87a2.145 2.145 0 0 1-2.146-2.147c0-1.186.96-2.145 2.146-2.145 1.187 0 2.146.959 2.146 2.145 0 1.187-.959 2.147-2.146 2.147zm0 7.867a2.144 2.144 0 0 1-2.146-2.145c0-1.187.96-2.146 2.146-2.146 1.187 0 2.146.96 2.146 2.146 0 1.187-.959 2.145-2.146 2.145zM17.883 4.88a2.144 2.144 0 0 1-2.146-2.145c0-1.187.96-2.146 2.146-2.146 1.187 0 2.146.96 2.146 2.146s-.96 2.145-2.146 2.145zm0 7.87a2.145 2.145 0 0 1-2.146-2.147c0-1.186.96-2.145 2.146-2.145 1.187 0 2.146.959 2.146 2.145 0 1.187-.96 2.147-2.146 2.147zm0 7.867a2.144 2.144 0 0 1-2.146-2.145c0-1.187.96-2.146 2.146-2.146 1.187 0 2.146.96 2.146 2.146 0 1.187-.96 2.145-2.146 2.145z"
                    />
                  </g>
                </g>
              </svg>
              {isOpenBurger && (
                <div className="menu__burger-inner">
                  <MenuList />
                </div>
              )}
            </div>

            <div className="menu__search menu__search-after">
              <input className="menu__input" placeholder="What are you looking for?" />
              <svg
                className="relative right-8"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16">
                <path
                  fill="#243f4d"
                  d="M3.702 6.076c.356-.065.68.13.746.484.096.582.355 1.067.78 1.49.42.388.941.677 1.493.776.325.066.552.39.487.743a.643.643 0 0 1-.714.516 4.2 4.2 0 0 1-2.143-1.13 4.164 4.164 0 0 1-1.136-2.137c-.065-.354.128-.676.487-.742zM6.98-.004c3.465 0 6.279 2.8 6.279 6.257 0 .93-.203 1.812-.568 2.604l2.336 2.036c1.703 1.747.746 3.266.294 3.717-.422.454-1.994 1.415-3.73-.292l-2.06-2.35c-.78.345-1.64.539-2.548.539-3.468 0-6.278-2.802-6.278-6.257 0-3.456 2.807-6.254 6.275-6.254zm5.546 13.517c.293.324 1.126.867 1.88.226.21-.176.634-1.068-.227-1.873l-2.162-1.88a6.269 6.269 0 0 1-1.363 1.34zM6.98 11.201c2.742 0 4.966-2.216 4.966-4.948S9.722 1.305 6.98 1.305 2.015 3.521 2.015 6.253s2.22 4.948 4.965 4.948z"
                />
              </svg>
            </div>
          </div> */}
          <div className="menu__user">
            <Link className="menu__user-link" to="/login">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14">
                <path
                  fill="#243f4d"
                  d="M13.382 13.166H.549a.42.42 0 0 1-.428-.411c0-2.976 2.065-5.498 4.89-6.308-1.01-.622-1.681-1.711-1.681-2.948C3.33 1.571 4.96.003 6.966.003c2.004 0 3.636 1.568 3.636 3.496 0 1.237-.671 2.326-1.682 2.948 2.825.81 4.89 3.332 4.89 6.308a.42.42 0 0 1-.428.411zm-12.39-.823H12.94c-.22-2.984-2.815-5.347-5.973-5.347-3.159 0-5.754 2.363-5.974 5.347zM6.966.826c-1.533 0-2.78 1.2-2.78 2.673 0 1.475 1.246 2.674 2.78 2.674 1.533 0 2.78-1.2 2.78-2.674S8.499.826 6.966.826z"
                />
              </svg>
            </Link>
            <span className="menu__user-descr">Your profile</span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
