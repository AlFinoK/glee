import React, { useState } from 'react'
import ProductItems from './ProductItems'

const MainProductList = ({ title, price, imageUrl }) => {
  const [activeProduct, setActiveProduct] = useState(0)
  const categories = ['All', 'Furnitures', 'Chairs', 'Lighting', 'Decor']
  return (
    <section className="product">
      <div className="container">
        <h2 className="product__title title">Products of the week</h2>
        <ul className="product__list">
          {categories.map((value, i) => (
            <li
              key={i}
              className={
                activeProduct === i ? 'product__item product__item-active' : 'product__item'
              }
              onClick={() => setActiveProduct(i)}>
              {value}
            </li>
          ))}
        </ul>
        <ProductItems />
      </div>
    </section>
  )
}

export default MainProductList
