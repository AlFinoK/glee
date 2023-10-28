import { Skeleton } from '@mui/material'
import { useState, useEffect } from 'react'

import { MainProduct } from 'entities/MainProduct'
import s from './ProductItems.module.scss'

export const ProductItems = () => {
  const [isloading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://64be88e35ee688b6250c9498.mockapi.io/weeklyProducts')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="products__wrapper">
      <div className={s.product__content}>
        {isloading
          ? [...new Array(8)].map((_, index) => (
              <Skeleton key={index} animation="wave" variant="rounded" width={270} height={380} />
            ))
          : items.map((obj, id) => <MainProduct key={id} {...obj} />)}
      </div>
    </div>
  )
}
