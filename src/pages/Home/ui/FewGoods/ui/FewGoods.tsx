import { Link } from 'react-router-dom'
import s from './FewGoods.module.scss'

export const FewGoods = () => {
  return (
    <div className={s.fewGoods}>
      <div className="containerBig">
        <div className={s.fewGoods__items}>
          <div className={s.fewGoods__item}>
            <img
              className={s.fewGoods__img}
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/lump-1.png"
              alt="lump"
            />
            <div className={s.fewGoods__content}>
              <h5 className={s.fewGoods__title}>Mirum Notare Tellus</h5>
              <p className={s.fewGoods__text}>
                LEDCornBulb Lamp 5W 7W 10W 12W 15W E26 E27LEDCornLight
              </p>
              <Link className={s.fewGoods__link} to="/">
                View More
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9">
                  <path
                    fill="#243f4d"
                    d="M.296 5.472H.288h16.956l-.1 2.857a.287.287 0 0 0-.084.205c0 .077.03.15.084.205l.172.172a.286.286 0 0 0 .407.002l4.193-4.211a.289.289 0 0 0 0-.41L17.723.08a.29.29 0 0 0-.407 0l-.172.173a.288.288 0 0 0 0 .405l.113 2.865H.292A.298.298 0 0 0 0 3.818v1.37c0 .159.137.284.296.284z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className={s.fewGoods__item}>
            <img
              className={s.fewGoods__img}
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/lump-2.png"
              alt="lump"
            />
            <div className={s.fewGoods__content}>
              <h5 className={s.fewGoods__title}>Malesuada Tempor Euismod</h5>
              <p className={s.fewGoods__text}>
                50W 8000lm Compact Size for HID StreetLightReplacementLEDCornLight
              </p>
              <Link className={s.fewGoods__link} to="/">
                View More
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9">
                  <path
                    fill="#243f4d"
                    d="M.296 5.472H.288h16.956l-.1 2.857a.287.287 0 0 0-.084.205c0 .077.03.15.084.205l.172.172a.286.286 0 0 0 .407.002l4.193-4.211a.289.289 0 0 0 0-.41L17.723.08a.29.29 0 0 0-.407 0l-.172.173a.288.288 0 0 0 0 .405l.113 2.865H.292A.298.298 0 0 0 0 3.818v1.37c0 .159.137.284.296.284z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
