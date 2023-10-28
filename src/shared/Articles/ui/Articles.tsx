import { Link } from 'react-router-dom'

import s from './Articles.module.scss'
import { Partners } from 'shared/Partners'

export const Articles = () => {
  return (
    <section className={s.articles}>
      <div className="container">
        <div className={s.articles__top}>
          <h3 className="title">Our Insights & Articles</h3>
          <Link className={s.articles__topLink} to="/">
            View All
          </Link>
        </div>
        <div className={s.articles__items}>
          <div className={s.articles__item}>
            <img
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/article-1.jpg"
              alt="article"
            />
            <div className={s.articles__itemWrapper}>
              <p className={s.articles__itemText}>
                Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <div className={s.articles__itemInfo}>
                <span className={s.articles__itemDate}>28 JANUARY, 2020</span>
                <Link className={s.articles__itemAuthor} to="/">
                  BY ADMIN
                </Link>
              </div>
            </div>
          </div>
          <div className={s.articles__item}>
            <img
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/article-2.jpg"
              alt="article"
            />
            <div className={s.articles__itemWrapper}>
              <p className={s.articles__itemText}>
                Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <div className={s.articles__itemInfo}>
                <span className={s.articles__itemDate}>28 JANUARY, 2020</span>
                <Link className={s.articles__itemAuthor} to="/">
                  BY ADMIN
                </Link>
              </div>
            </div>
          </div>
          <div className={s.articles__item}>
            <img
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/article-3.jpg"
              alt="article"
            />
            <div className={s.articles__itemWrapper}>
              <p className={s.articles__itemText}>
                Diusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <div className={s.articles__itemInfo}>
                <span className={s.articles__itemDate}>28 JANUARY, 2020</span>
                <Link className={s.articles__itemAuthor} to="/">
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
