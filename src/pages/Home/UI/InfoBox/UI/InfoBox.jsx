import s from './InfoBox.module.scss'

export const InfoBox = () => {
  return (
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
  )
}
