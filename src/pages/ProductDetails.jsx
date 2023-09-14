import React, { useState } from 'react'
import Rating from '@mui/material/Rating'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css/bundle'

import Top from '../layouts/Breadcrumbs/Top'
import Articles from '../layouts/Articles'
import Arrow from '../assets/images/icons/slider-arrow.svg'
import ThumbLump from '../assets/images/content/thumb-lump.png'
import ProductItems from '../components/ProductItems'

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <main className="main">
      <Top />
      <section className="productDetails">
        <div className="container">
          <div className="productDetails-top">
            <div className="productDetails-top__inner">
              <div className="productDetails-top__swiper">
                <Swiper
                  spaceBetween={10}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Thumbs]}
                  className="productDetails-top__thumb-swiper2 main">
                  <SwiperSlide>
                    <img src={ThumbLump} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ThumbLump} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ThumbLump} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ThumbLump} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ThumbLump} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ThumbLump} />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  slidesPerView={3}
                  spaceBetween={10}
                  freeMode={true}
                  allowTouchMove={false}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Thumbs]}
                  className="productDetails-top__thumb-swiper">
                  <SwiperSlide>
                    <img src={ThumbLump} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ThumbLump} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ThumbLump} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ThumbLump} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ThumbLump} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={ThumbLump} />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="productDetails-top__info">
                <h4 className="productDetails-top__info-title">Pendant lamp</h4>
                <Rating name="read-only" defaultValue={4} size="small" readOnly />
                <span className="productDetails-top__info-price">23$</span>
                <p className="productDetails-top__info-text">
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo
                </p>
                <div className="productDetails-top__info-buy">
                  <div className="productDetails-top__counter">
                    <span className="productDetails-top__counter-minus">-</span>
                    <span className="productDetails-top__counter-value">0</span>
                    <span className="productDetails-top__counter-plus">+</span>
                  </div>

                  <button className="productDetails-top__info-btn">Add to cart</button>
                </div>
                <div className="productDetails-top__infoProduct">
                  <div className="productDetails-top__infoProduct-block size">
                    <h6 className="productDetails-top__infoProduct-title">
                      SKU: <span className="infoProduct-value">014</span>
                    </h6>
                  </div>
                  <div className="productDetails-top__infoProduct-block category">
                    <h6 className="productDetails-top__infoProduct-title">
                      Category: <span className="infoProduct-value">Lights</span>
                    </h6>
                  </div>
                  <div className="productDetails-top__infoProduct-block tag">
                    <h6 className="productDetails-top__infoProduct-title">
                      Tag: <span className="infoProduct-value">Decorative</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="productDetails-bottom">
            <div className="productDetails-bottom__buttons">
              <button className="productDetails-bottom__btn">Description</button>
              <button className="productDetails-bottom__btn">Additional information</button>
              <button className="productDetails-bottom__btn">Reviews (2)</button>
            </div>
            <p className="productDetails-bottom__text">
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </section>
      <section className="related-products">
        <div className="container">
          <div className="related-products__inner">
            <div className="related-products__top">
              <h4 className="related-products__title">Related products</h4>
              <div className="related-products__buttons">
                <span className="related-products__button-prev" data-nav="prev">
                  <img src={Arrow} alt="arrow-left" />
                </span>
                <span className="related-products__button-next" data-nav="next">
                  <img src={Arrow} alt="arrow-right" />
                </span>
              </div>
            </div>
            <Swiper
              slidesPerView={4}
              loop="true"
              navigation={{
                clickable: true,
                prevEl: '.related-products__button-prev',
                nextEl: '.related-products__button-next',
              }}
              modules={[Navigation]}
              className="related-products__swiper">
              <>
                <ProductItems>
                  <SwiperSlide></SwiperSlide>
                </ProductItems>
              </>
            </Swiper>
          </div>
        </div>
      </section>
      <Articles />
    </main>
  )
}

export default ProductDetails
