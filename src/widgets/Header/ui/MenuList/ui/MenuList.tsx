import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import s from './MenuList.module.scss'

export const MenuList = () => {
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
    <ul className={s.menu__list}>
      <li className={`${s.menu__item} ${s.menu__down}`}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className={s.menu__item}>
        <NavLink to="/about">About</NavLink>
      </li>
      <li className={s.menu__item}>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li className={`${s.menu__item} ${s.menu__down}`}>
        <NavLink className={s.menu__link} to="/">
          Pages
          <svg
            onClick={() => setSvgActive(svgActive)}
            className={svgActive ? `${s.svgPlus} ${s.svgPlusActive}` : `${s.svgPlus}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="14px"
            height="10px"
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
        <div className={s.submenu}>
          <ul className={s.submenu__list}>
            {/* {SubmenuPages.map((value) => (
              <li key={value} className={s.submenu__item}> 
                <Link className={s.submenu__link} to="/">
                  {value}
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
      </li>
      <li className={s.menu__item}>
        <NavLink to="/blog">News</NavLink>
      </li>
      <li className={s.menu__item}>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
  )
}
