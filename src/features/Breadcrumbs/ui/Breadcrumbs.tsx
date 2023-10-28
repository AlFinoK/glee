import { Link } from 'react-router-dom'
import s from './Breadcrumbs.module.scss'

export const Breadcrumbs = () => {
  return (
    <section className={s.breadcrumbs}>
      <div className="containerBig">
        <h2 className={s.breadcrumbs__title}>Title</h2>
        <div className={s.breadcrumb}>
          <ul className={s.breadcrumb__list}>
            <li className={s.breadcrumb__item}>
              <Link className={s.breadcrumb__link} to="/">
                Title
              </Link>
            </li>
            <li className={s.breadcrumb__item}>
              <Link className={s.breadcrumb__link} to="/">
                Title
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
