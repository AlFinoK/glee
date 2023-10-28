import { Link } from 'react-router-dom'
import s from './MainProduct.module.scss'

export const MainProduct = ({ title, price, imageUrl }) => {
  return (
    <div className={s.product__contentItem}>
      <div className={s.product__contentImages}>
        <img src={imageUrl} alt="1" />
        <div className={s.product__contentLinks}>
          <Link className={s.product__contentLink} to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
              <g>
                <g>
                  <path
                    fill="#243f4d"
                    d="M5.526 16.978c-.536 0-1.063-.21-1.461-.607a2.066 2.066 0 0 1-.453-2.26 2.068 2.068 0 0 1 1.915-1.28h.006c.55 0 1.07.214 1.46.602.393.394.609.913.609 1.467.002.84-.5 1.593-1.277 1.917-.258.108-.53.16-.798.16zm.007-2.963h-.004a.887.887 0 0 0-.628 1.518.89.89 0 1 0 .632-1.518zm8.385 2.963c-.537 0-1.064-.21-1.461-.607a2.065 2.065 0 0 1-.452-2.26 2.065 2.065 0 0 1 1.913-1.28c.546-.04 1.08.218 1.468.603.392.393.607.912.607 1.466a2.064 2.064 0 0 1-1.274 1.917c-.26.108-.532.16-.8.16zm.006-2.963h-.001c-.331.032-.685.215-.823.548a.89.89 0 1 0 .824-.548zm-11.279.163a.592.592 0 0 1-.536-.843c.579-1.24 1.627-1.973 3.054-2.15L4.108 5.792a.593.593 0 0 1 1.163-.227l1.091 5.578h9.423l1.807-6.771H4.29A4.354 4.354 0 0 1 .007.68.591.591 0 1 1 1.178.505a3.165 3.165 0 0 0 3.115 2.682h14.07a.591.591 0 0 1 .573.745l-2.123 7.956a.594.594 0 0 1-.573.44H5.885a.044.044 0 0 0-.023 0c-1.33 0-2.205.493-2.68 1.51a.593.593 0 0 1-.537.34z"
                  />
                </g>
              </g>
            </svg>
          </Link>
          <Link className={s.product__contentLink} to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17">
              <g>
                <g>
                  <path
                    fill="#243f4d"
                    d="M8.913 16.244a.707.707 0 0 1-.28-.056c-.353-.15-8.65-3.75-8.65-10.76C.074 2.779 2.19.722 4.801.722c1.743 0 3.266.918 4.112 2.31a4.796 4.796 0 0 1 4.112-2.31c2.61 0 4.725 2.058 4.817 4.684 0 7.034-8.297 10.634-8.65 10.783a.71.71 0 0 1-.28.056zM4.8 2.106c-1.847 0-3.343 1.47-3.408 3.346 0 5.408 6.125 8.663 7.52 9.335 1.395-.672 7.52-3.93 7.52-9.358-.065-1.853-1.563-3.323-3.408-3.323s-3.342 1.47-3.408 3.346a.7.7 0 0 1-.704.67.7.7 0 0 1-.705-.67c-.064-1.876-1.561-3.346-3.407-3.346z"
                  />
                </g>
              </g>
            </svg>
          </Link>
          <Link className={s.product__contentLink} to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <g>
                <g>
                  <path
                    fill="#243f4d"
                    d="M3.702 6.076c.356-.065.68.13.746.484.096.582.355 1.067.78 1.49.42.388.941.677 1.493.776.325.066.552.39.487.743a.643.643 0 0 1-.714.516 4.2 4.2 0 0 1-2.143-1.13 4.164 4.164 0 0 1-1.136-2.137c-.065-.354.128-.676.487-.742zM6.98-.004c3.465 0 6.279 2.8 6.279 6.257 0 .93-.203 1.812-.568 2.604l2.336 2.036c1.703 1.747.746 3.266.294 3.717-.422.454-1.994 1.415-3.73-.292l-2.06-2.35c-.78.345-1.64.539-2.548.539-3.468 0-6.278-2.802-6.278-6.257 0-3.456 2.807-6.254 6.275-6.254zm5.546 13.517c.293.324 1.126.867 1.88.226.21-.176.634-1.068-.227-1.873l-2.162-1.88a6.269 6.269 0 0 1-1.363 1.34zM6.98 11.201c2.742 0 4.966-2.216 4.966-4.948S9.722 1.305 6.98 1.305 2.015 3.521 2.015 6.253s2.22 4.948 4.965 4.948z"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <h6 className={s.product__contentTitle}>{title}</h6>
      <span className={s.product__contentPrice}>${price}</span>
    </div>
  )
}
