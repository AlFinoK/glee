import { useState } from 'react'
import { DesignProduct } from 'entities/DesignProduct'
import items from '../config/DesignProducts.json'
import s from './DesignProductList.module.scss'

export const DesignProductList = () => {
  const [activeProduct, setActiveProduct] = useState(0)
  const categories = ['All', 'Furnitures', 'Chairs', 'Lighting', 'Decor']

  const onClickProduct = (i) => {
    setActiveProduct(i)
  }
  return (
    <section className={s.designProduct}>
      <div className="container">
        <h2 className="title">New Design</h2>
        <ul className={s.designProduct__list}>
          {categories.map((value, i) => (
            <li
              key={i}
              className={
                activeProduct === i
                  ? `${s.designProduct__item} ${s.designProduct__itemActive}`
                  : `${s.designProduct__item}`
              }
              onClick={() => onClickProduct(i)}>
              {value}
            </li>
          ))}
        </ul>
        <div className={s.designProduct__contentItems}>
          {items.map((obj) => (
            <DesignProduct key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </section>
  )
}
