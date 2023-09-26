import { useState, useEffect } from 'react'
import MainProductBlock from './MainProductBlock'

const ProductItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://64be88e35ee688b6250c9498.mockapi.io/weeklyProducts')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
      })
  }, [])

  return (
    <div className="product__content">
      {items.map((obj) => (
        <MainProductBlock key={obj.imageUrl} {...obj} />
      ))}
    </div>
  )
}

export default ProductItems
