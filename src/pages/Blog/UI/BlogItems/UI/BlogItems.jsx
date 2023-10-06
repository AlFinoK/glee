import { Link } from 'react-router-dom'
import BlogItem1 from 'assets/images/content/blog-item-1.webp'
import BlogItem2 from 'assets/images/content/blog-item-2.webp'
import BlogItem3 from 'assets/images/content/blog-item-3.webp'
import BlogItem4 from 'assets/images/content/blog-item-4.webp'
import s from './BlogItems.module.scss'

export const BlogItems = () => {
  return (
    <div className="blog__items">
      <div className="blog__item">
        <div className="blog__item-img">
          <img src={BlogItem1} alt="" />
          <div className="blog__item-info">
            <span className="blog__item-date">28 JANUARY, 2020</span>
            <Link className="blog__item-author" to="/">
              BY ADMIN
            </Link>
          </div>
        </div>
        <h4 className="blog__item-title title">Fonsectetur adipisicing eiusmod</h4>
        <p className="blog__item-text">
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alLorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna
        </p>
        <Link className="blog__item-link" to="/blog-details">
          View More
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9">
            <path
              fill="#a3bbc8"
              d="M.296 5.472H.288h16.956l-.1 2.857a.287.287 0 0 0-.084.205c0 .077.03.15.084.205l.172.172a.286.286 0 0 0 .407.002l4.193-4.211a.289.289 0 0 0 0-.41L17.723.08a.29.29 0 0 0-.407 0l-.172.173a.288.288 0 0 0 0 .405l.113 2.865H.292A.298.298 0 0 0 0 3.818v1.37c0 .159.137.284.296.284z"
            />
          </svg>
        </Link>
      </div>
      <div className="blog__item">
        <div className="blog__item-img">
          <img src={BlogItem2} alt="" />
          <div className="blog__item-info">
            <span className="blog__item-date">28 JANUARY, 2020</span>
            <Link className="blog__item-author" to="/">
              BY ADMIN
            </Link>
          </div>
        </div>
        <h4 className="blog__item-title title">Fonsectetur adipisicing elit</h4>
        <p className="blog__item-text">
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alLorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna
        </p>
        <Link className="blog__item-link" to="/blog-details">
          View More
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9">
            <path
              fill="#a3bbc8"
              d="M.296 5.472H.288h16.956l-.1 2.857a.287.287 0 0 0-.084.205c0 .077.03.15.084.205l.172.172a.286.286 0 0 0 .407.002l4.193-4.211a.289.289 0 0 0 0-.41L17.723.08a.29.29 0 0 0-.407 0l-.172.173a.288.288 0 0 0 0 .405l.113 2.865H.292A.298.298 0 0 0 0 3.818v1.37c0 .159.137.284.296.284z"
            />
          </svg>
        </Link>
      </div>
      <div className="blog__item">
        <div className="blog__item-img">
          <img src={BlogItem3} alt="" />
          <div className="blog__item-info">
            <span className="blog__item-date">28 JANUARY, 2020</span>
            <Link className="blog__item-author" to="/">
              BY ADMIN
            </Link>
          </div>
        </div>
        <h4 className="blog__item-title title">Fsectetur adipisicing tempor incididunt</h4>
        <p className="blog__item-text">
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alLorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna
        </p>
        <Link className="blog__item-link" to="/blog-details">
          View More
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9">
            <path
              fill="#a3bbc8"
              d="M.296 5.472H.288h16.956l-.1 2.857a.287.287 0 0 0-.084.205c0 .077.03.15.084.205l.172.172a.286.286 0 0 0 .407.002l4.193-4.211a.289.289 0 0 0 0-.41L17.723.08a.29.29 0 0 0-.407 0l-.172.173a.288.288 0 0 0 0 .405l.113 2.865H.292A.298.298 0 0 0 0 3.818v1.37c0 .159.137.284.296.284z"
            />
          </svg>
        </Link>
      </div>
      <div className="blog__item">
        <div className="blog__item-img">
          <img src={BlogItem4} alt="" />
          <div className="blog__item-info">
            <span className="blog__item-date">28 JANUARY, 2020</span>
            <Link className="blog__item-author" to="/">
              BY ADMIN
            </Link>
          </div>
        </div>
        <h4 className="blog__item-title title">Vonsectetur adipisicing elit</h4>
        <p className="blog__item-text">
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alLorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna
        </p>
        <Link className="blog__item-link" to="/blog-details">
          View More
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9">
            <path
              fill="#a3bbc8"
              d="M.296 5.472H.288h16.956l-.1 2.857a.287.287 0 0 0-.084.205c0 .077.03.15.084.205l.172.172a.286.286 0 0 0 .407.002l4.193-4.211a.289.289 0 0 0 0-.41L17.723.08a.29.29 0 0 0-.407 0l-.172.173a.288.288 0 0 0 0 .405l.113 2.865H.292A.298.298 0 0 0 0 3.818v1.37c0 .159.137.284.296.284z"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
