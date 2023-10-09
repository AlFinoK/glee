import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from './Header.module.scss'
import { Nav } from './Nav'

export const Header = () => {
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
