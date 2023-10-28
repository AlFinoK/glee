import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material'

import TitleLine from 'assets/images/icons/title-line.png'
import RecentProd1 from 'assets/images/content/recent-1.png'
import RecentProd2 from 'assets/images/content/recent-2.png'
import RecentProd3 from 'assets/images/content/recent-2.png'
import s from './RecentProductList.module.scss'

export const RecentProductList = () => {
  const [value, setValue] = useState(4)

  return (
    <div className={`${s.recentProducts} ${s.filter}`}>
      <div className="filter__title">
        <h4>RECENT PRODUCTS</h4>
        <img src={TitleLine} alt="line" />
      </div>
      <div>
        <div className={s.recentProducts__item}>
          <div className={s.recentProducts__itemLeft}>
            <img src={RecentProd1} alt="#" />
          </div>
          <div className={s.recentProducts__itemRight}>
            <Link className={s.recentProducts__itemWrapper} to="/">
              <span>Pendant lamp</span>
              <Rating name="size-small" value={value} readOnly />
              <span>23$</span>
            </Link>
          </div>
        </div>
        <div className={s.recentProducts__item}>
          <div className={s.recentProducts__itemLeft}>
            <img src={RecentProd2} alt="#" />
          </div>
          <div className={s.recentProducts__itemRight}>
            <Link className={s.recentProducts__itemWrapper} to="/">
              <span>Pendant lamp</span>
              <Rating name="size-small" value={value} readOnly />
              <span>23$</span>
            </Link>
          </div>
        </div>
        <div className={s.recentProducts__item}>
          <div className={s.recentProducts__itemLeft}>
            <img src={RecentProd3} alt="#" />
          </div>
          <div className={s.recentProducts__itemRight}>
            <Link className={s.recentProducts__itemWrapper} to="/">
              <span>Pendant lamp</span>
              <Rating name="size-small" value={value} readOnly />
              <span>23$</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
