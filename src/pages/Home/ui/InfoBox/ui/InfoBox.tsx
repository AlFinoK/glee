import s from './InfoBox.module.scss'

export const InfoBox = () => {
  return (
    <div className={s.infoBox}>
      <div className={s.containerBig}>
        <div className={s.infoBox__inner}>
          <div className={s.infoBox__item}>
            <h6 className={s.infoBox__title}>Support 24/7.</h6>
            <p className={s.infoBox__text}>Contact us 24 hours a day, 7 days a week.</p>
          </div>
          <div className={s.infoBox__item}>
            <h6 className={s.infoBox__title}>Delivery.</h6>
            <p className={s.infoBox__text}>Free shipping on all US order.</p>
          </div>
          <div className={s.infoBox__item}>
            <h6 className={s.infoBox__title}>100% Payment secure.</h6>
            <p className={s.infoBox__text}>We ensure secure payment with PEV.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
