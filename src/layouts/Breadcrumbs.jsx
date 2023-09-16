import { Link } from 'react-router-dom'

const Breadcrumbs = () => {
  return (
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
  )
}

export default Breadcrumbs
