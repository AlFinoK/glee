import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'

import s from './styles.module.scss'

const RelatedProducts = () => {
  return (
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
  )
}

export default RelatedProducts
