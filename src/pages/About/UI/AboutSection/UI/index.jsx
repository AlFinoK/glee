import s from './styles.module.scss'

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__img">
            <img
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/about-us.jpg"
              alt="about"
            />
          </div>
          <div className="about__statistics">
            <div className="about__info">
              <div className="about__info-item">Years</div>
              <div className="about__info-item">Experience</div>
              <div className="about__info-item">Working</div>
            </div>
            <h4 className="about__title">Mission of our creative house</h4>
            <p className="about__text">
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum
            </p>
            <div className="about__orders">
              <div className="about__orders-item">
                <div className="about__orders-number">520+</div>
                <p className="about__orders-name">Projects</p>
              </div>
              <div className="about__orders-item">
                <div className="about__orders-number">$4M</div>
                <p className="about__orders-name">Revenue</p>
              </div>
              <div className="about__orders-item">
                <div className="about__orders-number">250</div>
                <p className="about__orders-name">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
