import React, { useState } from 'react'
import DesignProductBlock from './DesignProductBlock'
import products from '../data/designProducts.json'

const DesignProducts = (title, type, imageUrl) => {
  const [activeProduct, setActiveProduct] = useState(0)
  const categories = ['All', 'Furnitures', 'Chairs', 'Lighting', 'Decor']

  const onClickProduct = (i) => {
    setActiveProduct(i)
  }
  return (
    <section className="design-product">
      <div className="container">
        <h2 className="design-product__title title">New Design</h2>
        <ul className="design-product__list">
          {categories.map((value, i) => (
            <li
              key={i}
              className={
                activeProduct === i
                  ? 'design-product__item design-product__item-active'
                  : 'design-product__item'
              }
              onClick={() => onClickProduct(i)}>
              {value}
            </li>
          ))}
        </ul>
        <div className="design-product__content-items">
          {products.map((obj) => (
            <DesignProductBlock
              key={obj.id}
              imageUrl={obj.imageUrl}
              title={obj.title}
              type={obj.type}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DesignProducts
