import { NavLink } from 'react-router-dom'
import RecentPost1 from 'assets/images/content/RecentPost1.webp'
import RecentPost2 from 'assets/images/content/RecentPost2.webp'
import RecentPost3 from 'assets/images/content/RecentPost3.webp'
import RecentPost4 from 'assets/images/content/RecentPost4.webp'
import TitleLine from 'assets/images/icons/title-line.png'
import s from './styles.module.scss'

const RecentPostList = () => {
  return (
    <div className="recent-products filter">
      <div className="filter__title">
        <h4>RECENT PRODUCTS</h4>
        <img src={TitleLine} alt="line" />
      </div>
      <div className="recent-products__items">
        <div className="recent-products__item">
          <div className="recent-products__item-left recent-posts__item-left">
            <img src={RecentPost1} alt="#" />
          </div>
          <div className="recent-products__item-right">
            <NavLink className="recent-products__item-wrapper" to="/">
              <span className="recent-products__item-name">
                Corem ipsum dolor tetur adipisicing elit
              </span>
              <span className="recent-products__item-date">28 JANUARY, 2020</span>
            </NavLink>
          </div>
        </div>
        <div className="recent-products__item">
          <div className="recent-products__item-left recent-posts__item-left">
            <img src={RecentPost2} alt="#" />
          </div>
          <div className="recent-products__item-right">
            <NavLink className="recent-products__item-wrapper" to="/">
              <span className="recent-products__item-name">
                Corem ipsum dolor tetur adipisicing elit
              </span>
              <span className="recent-products__item-date">28 JANUARY, 2020</span>
            </NavLink>
          </div>
        </div>
        <div className="recent-products__item">
          <div className="recent-products__item-left recent-posts__item-left">
            <img src={RecentPost3} alt="#" />
          </div>
          <div className="recent-products__item-right">
            <NavLink className="recent-products__item-wrapper" to="/">
              <span className="recent-products__item-name">
                Corem ipsum dolor tetur adipisicing elit
              </span>
              <span className="recent-products__item-date">28 JANUARY, 2020</span>
            </NavLink>
          </div>
        </div>
        <div className="recent-products__item">
          <div className="recent-products__item-left recent-posts__item-left">
            <img src={RecentPost4} alt="#" />
          </div>
          <div className="recent-products__item-right">
            <NavLink className="recent-products__item-wrapper" to="/">
              <span className="recent-products__item-name">
                Corem ipsum dolor tetur adipisicing elit
              </span>
              <span className="recent-products__item-date">28 JANUARY, 2020</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentPostList
