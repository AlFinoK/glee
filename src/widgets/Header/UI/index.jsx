import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logoSvg from '@logo.svg'
import FavoriteSvg from '@assets/images/icons/favorite.svg'
import CartSvg from '@assets/images/icons/cart.svg'
import MenuList from '@widgets/Header/UI/MenuList/UI'
import s from './styles.module.scss'
import { Nav } from './Nav'

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
        <Nav />
      </div>
    </header>
  )
}

export default Header
