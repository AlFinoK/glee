import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css/bundle'

import s from './HomeSwiper.module.scss'

export const HomeSwiper = () => {
  return (
    <section className={s.homeSwiper}>
      <div className="containerBig">
        <Swiper
          className={s.mySwiper}
          modules={[Pagination, Autoplay]}
          speed={500}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          pagination={{ clickable: true, loop: true }}>
          <div>
            <SwiperSlide className={s.homeSwiper__slide}>
              <div className={s.homeSwiper__content}>
                <h3 className={s.homeSwiper__title}>SMART AND TRENDY</h3>
                <p className={s.homeSwiper__text}>
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <Link className={s.homeSwiper__link} to="/">
                  Shop Now
                </Link>
              </div>
              <div className={s.homeSwiper__img}>
                <img
                  src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/top-bg.png"
                  alt="swiper"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.homeSwiper__slide}>
              <div className={s.homeSwiper__content}>
                <h3 className={s.homeSwiper__title}>SMART AND TRENDY</h3>
                <p className={s.homeSwiper__text}>
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <Link className={s.homeSwiper__link} to="/">
                  Shop Now
                </Link>
              </div>
              <div className={s.homeSwiper__img}>
                <img
                  src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/top-bg.png"
                  alt="swiper"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.homeSwiper__slide}>
              <div className={s.homeSwiper__content}>
                <h3 className={s.homeSwiper__title}>SMART AND TRENDY</h3>
                <p className={s.homeSwiper__text}>
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <Link className={s.homeSwiper__link} to="/">
                  Shop Now
                </Link>
              </div>
              <div className={s.homeSwiper__img}>
                <img
                  src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/top-bg.png"
                  alt="swiper"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className={s.homeSwiper__slide}>
              <div className={s.homeSwiper__content}>
                <h3 className={s.homeSwiper__title}>SMART AND TRENDY</h3>
                <p className={s.homeSwiper__text}>
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <Link className={s.homeSwiper__link} to="/">
                  Shop Now
                </Link>
              </div>
              <div className={s.homeSwiper__img}>
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
