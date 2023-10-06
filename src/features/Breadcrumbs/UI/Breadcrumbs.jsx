import { Link } from 'react-router-dom'
import s from './Breadcrumbs.module.scss'

export const Breadcrumbs = () => {
  return (
    <section className="top">
      <div className="container-big">
        <h2 className="top__title">Title</h2>
        <div className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/">
                Title
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/">
                Title
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
