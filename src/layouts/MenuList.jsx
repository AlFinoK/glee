import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const MenuList = () => {
  const [svgActive, setSvgActive] = useState(true)
  const SubmenuPages = [
    'First page',
    'Second page',
    'Third page',
    'Fourth page',
    'Fifth page',
    'Sixth page',
    'Seventh page',
    'Eighth page',
    'Nineth page',
    'Tenth page',
  ]

  return (
    <ul className="menu__list">
      <li className="menu__item menu__down">
        <NavLink className="menu__link flex" to="/home">
          Home
          <svg
            onClick={() => setSvgActive(svgActive)}
            className={svgActive ? 'svg-plus svg-plus-active' : 'svg-plus'}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="14px"
            height="14px"
            fillRule="evenodd"
            clipRule="evenodd">
            <polygon
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#fff"
              points="22,10.996 13.003,10.996 13.003,2 10.997,2 10.997,10.996   2,10.996 2,13.003 10.997,13.003 10.997,22 13.003,22 13.003,13.003 22,13.003 "
            />
          </svg>
        </NavLink>
        <div className="submenu">
          <ul className="submenu__list">
            {SubmenuPages.map((value) => (
              <li key={value} className="submenu__item">
                <NavLink className="submenu__link" to="/">
                  {value}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </li>
      <li className="menu__item">
        <NavLink className="menu__link" to="/about">
          About
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink className="menu__link" to="/products">
          Products
        </NavLink>
      </li>
      <li className="menu__item menu__down">
        <NavLink className="menu__link flex" to="/">
          Pages
          <svg
            onClick={() => setSvgActive(svgActive)}
            className={svgActive ? 'svg-plus svg-plus-active' : 'svg-plus'}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="14px"
            height="14px"
            fillRule="evenodd"
            clipRule="evenodd">
            <polygon
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#000000"
              points="22,10.996 13.003,10.996 13.003,2 10.997,2 10.997,10.996   2,10.996 2,13.003 10.997,13.003 10.997,22 13.003,22 13.003,13.003 22,13.003 "
            />
          </svg>
        </NavLink>
        <div className="submenu">
          <ul className="submenu__list">
            {SubmenuPages.map((value) => (
              <li key={value} className="submenu__item">
                <NavLink className="submenu__link" to="/">
                  {value}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </li>
      <li className="menu__item">
        <NavLink className="menu__link" to="/blog">
          News
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink className="menu__link" to="/contacts">
          Contacts
        </NavLink>
      </li>
    </ul>
  )
}

export default MenuList
