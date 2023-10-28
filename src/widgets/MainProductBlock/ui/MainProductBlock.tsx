import { useState } from 'react'

import { ProductItems } from 'widgets/ProductItems/ui/ProductItems'
import s from './MainProductBlock.module.scss'

export const MainProductBlock = ({ title, price, imageUrl }) => {
  const [activeProduct, setActiveProduct] = useState(0)
  const categories = ['All', 'Furnitures', 'Chairs', 'Lighting', 'Decor']

  return (
    <section className={s.product}>
      <div className="container">
        <h2 className="title">Products of the week</h2>
        <ul className={s.product__list}>
          {categories.map((value, i) => (
            <li
              key={i}
              className={
                activeProduct === i
                  ? `${s.product__item} ${s.product__itemActive}`
                  : `${s.product__item}`
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
