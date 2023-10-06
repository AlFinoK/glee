import { MainProduct } from 'entities/MainProduct'
import { useState, useEffect } from 'react'

export const ProductItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://64be88e35ee688b6250c9498.mockapi.io/weeklyProducts')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
      })
  }, [])

  return (
    <div className="products__wrapper">
      <div className="product__content">
        {items.map((obj) => (
          <MainProduct key={obj.imageUrl} {...obj} />
        ))}
      </div>
    </div>
  )
}
