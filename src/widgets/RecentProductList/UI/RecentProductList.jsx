import React from 'react'
import Rating from '@mui/material/Rating'

import TitleLine from 'assets/images/icons/title-line.png'
import RecentProd1 from 'assets/images/content/recent-1.png'
import RecentProd2 from 'assets/images/content/recent-2.png'
import RecentProd3 from 'assets/images/content/recent-3.png'
import s from './RecentProductList.module.scss'

import { Link } from 'react-router-dom'

export const RecentProductList = () => {
  const [value, setValue] = React.useState(4)

  return (
    <div className="recent-products filter">
      <div className="filter__title">
        <h4>RECENT PRODUCTS</h4>
        <img src={TitleLine} alt="line" />
      </div>
      <div className="recent-products__items">
        <div className="recent-products__item">
          <div className="recent-products__item-left">
            <img src={RecentProd1} alt="#" />
          </div>
          <div className="recent-products__item-right">
            <Link className="recent-products__item-wrapper" to="/">
              <span className="recent-products__item-name">Pendant lamp</span>
              <Rating name="size-small" value={value} readOnly />
              <span className="recent-products__item-price">23$</span>
            </Link>
          </div>
        </div>
        <div className="recent-products__item">
          <div className="recent-products__item-left">
            <img src={RecentProd2} alt="#" />
          </div>
          <div className="recent-products__item-right">
            <Link className="recent-products__item-wrapper" to="/">
              <span className="recent-products__item-name">Pendant lamp</span>
              <Rating name="size-small" value={value} readOnly />
              <span className="recent-products__item-price">23$</span>
            </Link>
          </div>
        </div>
        <div className="recent-products__item">
          <div className="recent-products__item-left">
            <img src={RecentProd3} alt="#" />
          </div>
          <div className="recent-products__item-right">
            <Link className="recent-products__item-wrapper" to="/">
              <span className="recent-products__item-name">Pendant lamp</span>
              <Rating name="size-small" value={value} readOnly />
              <span className="recent-products__item-price">23$</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
