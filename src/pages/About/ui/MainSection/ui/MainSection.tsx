import s from './MainSection.module.scss'

export const MainSection = () => {
  return (
    <section className={s.about}>
      <div className="container">
        <div className={s.about__inner}>
          <div className={s.about__img}>
            <img
              src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/about-us.jpg"
              alt="about"
            />
          </div>
          <div className={s.about__statistics}>
            <div className={s.about__info}>
              <div className={s.about__infoItem}>Years</div>
              <div className={s.about__infoItem}>Experience</div>
              <div className={s.about__infoItem}>Working</div>
            </div>
            <h4 className={s.about__title}>Mission of our creative house</h4>
            <p className={s.about__text}>
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum
            </p>
            <div className={s.about__orders}>
              <div className={s.about__ordersItem}>
                <div className={s.about__ordersNumber}>520+</div>
                <p className={s.about__ordersName}>Projects</p>
              </div>
              <div className={s.about__ordersItem}>
                <div className={s.about__ordersNumber}>$4M</div>
                <p className={s.about__ordersName}>Revenue</p>
              </div>
              <div className={s.about__ordersItem}>
                <div className={s.about__ordersNumber}>250</div>
                <p className={s.about__ordersName}>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
