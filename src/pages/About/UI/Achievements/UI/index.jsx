import s from './styles.module.scss'

const Achievements = () => {
  return (
    <div className="achievements">
      <div className="container">
        <div className="achievements__inner">
          <div className="achievements__item">
            <img
              className="achievements__item-img"
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/monitor.svg"
              alt="monitor"
            />
            <span className="achievements__item-number">99%</span>
            <h6 className="achievements__item-title">Satisﬁed Clients Rate</h6>
          </div>
          <div className="achievements__item">
            <img
              className="achievements__item-img"
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/truck.svg"
              alt="truck"
            />
            <span className="achievements__item-number">5020+</span>
            <h6 className="achievements__item-title">Products Delivered</h6>
          </div>
          <div className="achievements__item">
            <img
              className="achievements__item-img"
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/phone.svg"
              alt="phone"
            />
            <span className="achievements__item-number">23hr</span>
            <h6 className="achievements__item-title">Daily Working Time</h6>
          </div>
          <div className="achievements__item">
            <img
              className="achievements__item-img"
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/achieve.svg"
              alt="achieve"
            />
            <span className="achievements__item-number">140+</span>
            <h6 className="achievements__item-title">Brands in Store</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
