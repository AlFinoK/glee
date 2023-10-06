import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css/bundle'

import s from './HomeSwiper.module.scss'

export const HomeSwiper = () => {
  return (
    <section className="home-swiper">
      <div className="container-big">
        <Swiper
          className={s.mySwiper}
          modules={[Pagination, Autoplay]}
          speed={500}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          pagination={{ clickable: true, loop: true }}>
          <div className="top-swiper__inner swiper-wrapper">
            <SwiperSlide className="top-swiper__slide">
              <div className="top-swiper__content">
                <h3 className="top-swiper__title">SMART AND TRENDY</h3>
                <p className="top-swiper__text">
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <Link className="top-swiper__link" to="/">
                  Shop Now
                </Link>
              </div>
              <div className="top-swiper__img">
                <img
                  src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/top-bg.png"
                  alt="swiper"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="top-swiper__slide">
              <div className="top-swiper__content">
                <h3 className="top-swiper__title">SMART AND TRENDY</h3>
                <p className="top-swiper__text">
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <Link className="top-swiper__link" to="/">
                  Shop Now
                </Link>
              </div>
              <div className="top-swiper__img">
                <img
                  src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/top-bg.png"
                  alt="swiper"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="top-swiper__slide">
              <div className="top-swiper__content">
                <h3 className="top-swiper__title">SMART AND TRENDY</h3>
                <p className="top-swiper__text">
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <Link className="top-swiper__link" to="/">
                  Shop Now
                </Link>
              </div>
              <div className="top-swiper__img">
                <img
                  src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/top-bg.png"
                  alt="swiper"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="top-swiper__slide">
              <div className="top-swiper__content">
                <h3 className="top-swiper__title">SMART AND TRENDY</h3>
                <p className="top-swiper__text">
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <Link className="top-swiper__link" to="/">
                  Shop Now
                </Link>
              </div>
              <div className="top-swiper__img">
                <img
                  src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/top-bg.png"
                  alt="swiper"
                />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  )
}
