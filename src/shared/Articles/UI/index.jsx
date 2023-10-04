import { Link } from 'react-router-dom'

import s from './styles.module.scss'
import Partners from 'shared/Partners'

const Articles = () => {
  return (
    <section className="articles">
      <div className="container">
        <div className="articles__top">
          <h3 className="articles__top-title title ">Our Insights & Articles</h3>
          <Link className="articles__top-link" to="/">
            View All
          </Link>
        </div>
        <div className="articles__items">
          <div className="articles__item">
            <img
              className="articles__img"
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/article-1.jpg"
              alt="article"
            />
            <div className="articles__item-wrapper">
              <p className="articles__item-text">
                Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <div className="articles__item-info">
                <span className="articles__item-date">28 JANUARY, 2020</span>
                <Link className="articles__item-author" to="/">
                  BY ADMIN
                </Link>
              </div>
            </div>
          </div>
          <div className="articles__item">
            <img
              className="articles__img"
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/article-2.jpg"
              alt="article"
            />
            <div className="articles__item-wrapper">
              <p className="articles__item-text">
                Aonsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              </p>
              <div className="articles__item-info">
                <span className="articles__item-date">28 JANUARY, 2020</span>
                <Link className="articles__item-author" to="/">
                  BY ADMIN
                </Link>
              </div>
            </div>
          </div>
          <div className="articles__item">
            <img
              className="articles__img"
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/article-3.jpg"
              alt="article"
            />
            <div className="articles__item-wrapper">
              <p className="articles__item-text">
                Rncididunt ut labore et dolore magna aliqua. Ut enim
              </p>
              <div className="articles__item-info">
                <span className="articles__item-date">28 JANUARY, 2020</span>
                <Link className="articles__item-author" to="/">
                  BY ADMIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partners />
    </section>
  )
}

export default Articles
