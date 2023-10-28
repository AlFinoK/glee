import s from './Achievements.module.scss'

export const Achievements = () => {
  return (
    <div className={s.achievements}>
      <div className="container">
        <div className={s.achievements__inner}>
          <div className={s.achievements__item}>
            <img
              className={s.achievements__itemImg}
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/monitor.svg"
              alt="monitor"
            />
            <span className={s.achievements__itemNumber}>99%</span>
            <h6 className={s.achievements__itemTitle}>Satisﬁed Clients Rate</h6>
          </div>
          <div className={s.achievements__item}>
            <img
              className={s.achievements__itemImg}
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/truck.svg"
              alt="truck"
            />
            <span className={s.achievements__itemNumber}>5020+</span>
            <h6 className={s.achievements__itemTitle}>Products Delivered</h6>
          </div>
          <div className={s.achievements__item}>
            <img
              className={s.achievements__itemImg}
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/phone.svg"
              alt="phone"
            />
            <span className={s.achievements__itemNumber}>23hr</span>
            <h6 className={s.achievements__itemTitle}>Daily Working Time</h6>
          </div>
          <div className={s.achievements__item}>
            <img
              className={s.achievements__itemImg}
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/achieve.svg"
              alt="achieve"
            />
            <span className={s.achievements__itemNumber}>140+</span>
            <h6 className={s.achievements__itemTitle}>Brands in Store</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
