import { Link } from 'react-router-dom'

import HomeSwiper from '../components/HomeSwiper'
import DesignProducts from '../components/DesignProducts'
import MainProductList from '../components/MainProductList'
import Articles from '../layouts/Articles'

import PopupBtn from '../assets/images/icons/popup-btn.svg'

const Home = () => {
  return (
    <main className="main">
      <section className="top-slider">
        <div className="container-big">
          <HomeSwiper />
        </div>
      </section>
      <div className="info-box">
        <div className="container-big">
          <div className="info-box__inner">
            <div className="info-box__item">
              <h6 className="info-box__title">Support 24/7.</h6>
              <p className="info-box__text">Contact us 24 hours a day, 7 days a week.</p>
            </div>
            <div className="info-box__item">
              <h6 className="info-box__title">Delivery.</h6>
              <p className="info-box__text">Free shipping on all US order.</p>
            </div>
            <div className="info-box__item">
              <h6 className="info-box__title">100% Payment secure.</h6>
              <p className="info-box__text">We ensure secure payment with PEV.</p>
            </div>
          </div>
        </div>
      </div>
      <MainProductList />
      <div className="few-goods">
        <div className="container-big">
          <div className="few-goods__items">
            <div className="few-goods__item">
              <img
                className="few-goods__img"
                src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/lump-1.png"
                alt="lump"
              />
              <div className="few-goods__content">
                <h5 className="few-goods__title">Mirum Notare Tellus</h5>
                <p className="few-goods__text">
                  LEDCornBulb Lamp 5W 7W 10W 12W 15W E26 E27LEDCornLight
                </p>
                <Link className="few-goods__link" to="/">
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
            <div className="few-goods__item">
              <img
                className="few-goods__img"
                src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/lump-2.png"
                alt="lump"
              />
              <div className="few-goods__content">
                <h5 className="few-goods__title">Malesuada Tempor Euismod</h5>
                <p className="few-goods__text">
                  50W 8000lm Compact Size for HID StreetLightReplacementLEDCornLight
                </p>
                <Link className="few-goods__link" to="/">
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
      <DesignProducts />
      <div className="video-popup">
        <Link className="popup-link" to="/">
          <img className="video-popup__img" src={PopupBtn} alt="popup button" />
        </Link>
        <div className="video-popup popup" id="popup">
          <div className="video-popup popup__body">
            <div className="video-popup popup__content">
              {/* <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/W1azwtfGAMI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullscreen></iframe> */}
            </div>
          </div>
        </div>
      </div>
      <Articles />
    </main>
  )
}

export default Home