import { Link } from 'react-router-dom'

import { Articles, Top } from '../layouts'

const About = () => {
  return (
    <main className="main">
      <Top />
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
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
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
      <section className="team">
        <div className="container">
          <div className="team__inner">
            <div className="team__info">
              <h4 className="team__info-title">Our Team</h4>
              <p className="team__info-text">
                Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, sed do eiusmod tempor
                inciLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link className="team__info-link" to="/">
                Join With US
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11">
                  <path
                    fill="#fff"
                    d="M8.93 11.007a.63.63 0 0 0 .426-.161l5.434-4.912.019-.017a.889.889 0 0 0 .031-.032v-.001a.57.57 0 0 0-.05-.812L9.357.16a.64.64 0 0 0-.874.022.57.57 0 0 0 .024.834l4.311 3.897H.631a.605.605 0 0 0-.617.59c0 .325.276.59.617.59h12.186L8.506 9.99a.571.571 0 0 0-.024.834.634.634 0 0 0 .449.183z"
                  />
                </svg>
              </Link>
            </div>
            <div className="team__employ">
              <div className="team__employ-item">
                <img
                  className="team__employ-img"
                  src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/employ-1.jpg"
                  alt="employ"
                />
                <div className="team__employ-info">
                  <div className="team__employ-names">
                    <h6 className="team__employ-name">Eliza Elliot</h6>
                    <p className="team__employ-job">Commodo tempor</p>
                  </div>
                  <div className="team__employ-links">
                    <Link className="team__employ-social inst" to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18">
                        <path
                          fill="#888"
                          d="M3.588 16.94c-1.95-.505-3.114-1.775-3.424-3.75-.23-1.45-.255-8.19.164-9.654C.874 1.629 2.147.51 4.075.193 4.95.05 6.658 0 8.385 0a85.7 85.7 0 0 1 4.199.098c1.18.062 2.261.442 3.14 1.284.835.8 1.263 1.802 1.371 2.935.128 1.353.211 7.748-.187 9.247-.533 1.96-1.813 3.12-3.797 3.439-.742.12-2.745.191-4.744.191-2.047 0-4.091-.075-4.779-.254zm.918-15.255c-1.5.172-2.508 1.098-2.747 2.59-.247 1.58-.245 7.492-.06 8.68.19 1.236.89 2.085 2.122 2.43.668.188 2.666.254 4.626.254 1.803 0 3.575-.056 4.24-.13 1.514-.165 2.515-1.097 2.754-2.602.247-1.513.247-7.03.106-8.446-.154-1.513-1.079-2.507-2.575-2.742-.74-.112-2.525-.162-4.3-.162-1.712 0-3.416.047-4.166.128zM4.19 8.597a4.443 4.443 0 0 1 4.446-4.406 4.37 4.37 0 0 1 4.372 4.413 4.451 4.451 0 0 1-4.446 4.406A4.366 4.366 0 0 1 4.19 8.597zm1.553-.027a2.827 2.827 0 0 0 2.803 2.879h.026a2.88 2.88 0 0 0 2.876-2.824 2.823 2.823 0 0 0-2.803-2.88H8.62A2.88 2.88 0 0 0 5.744 8.57zm6.444-4.551a1.034 1.034 0 0 1 1.03-1.03h.013c.567 0 1.026.464 1.021 1.037a1.043 1.043 0 0 1-1.043 1.029 1.028 1.028 0 0 1-1.021-1.036z"
                        />
                      </svg>
                    </Link>
                    <Link className="team__employ-social google" to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="15"
                        viewBox="0 0 23 15">
                        <path
                          fill="#888"
                          d="M6.751 14.35c-1.409-.083-2.69-.525-3.823-1.36C1.466 11.911.545 10.474.158 8.7A6.496 6.496 0 0 1 .02 6.768a7.044 7.044 0 0 1 1.62-4.102C2.658 1.415 3.955.6 5.505.207a5.8 5.8 0 0 1 1.19-.186C6.922.013 7.15 0 7.378 0a6.741 6.741 0 0 1 3.398.932c.7.4 1.098.808 1.27.932-.717.705-1.405 1.395-2.108 2.086-.522-.45-1.099-.863-2.099-1.016a4.322 4.322 0 0 0-.613-.044c-2.007 0-3.688 1.45-4.136 3.353a3.942 3.942 0 0 0-.1 1.298c.153 1.768 1.337 3.218 2.935 3.736.407.128.83.189 1.254.189.1 0 .198-.003.298-.01.753-.048 1.459-.248 2.098-.67 1.075-.732 1.423-1.878 1.425-2.161H7.154l.021-2.77.007-.117h6.754c.364 2.107.036 4.323-1.275 6.056-.907 1.195-2.114 1.948-3.554 2.32a7.734 7.734 0 0 1-2.356.236zm11.439-4.054v-.07l.019-2.43h-2.507V7.72l.015-1.816v-.07h2.507l.018-2.437v-.069h1.962v.07l-.02 2.437h2.507v.069l-.014 1.816v.076H20.17l-.019 2.43v.07z"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team__employ-item">
                <img
                  className="team__employ-img"
                  src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/employ-2.jpg"
                  alt="employ"
                />
                <div className="team__employ-info">
                  <div className="team__employ-names">
                    <h6 className="team__employ-name">Roscoe A.</h6>
                    <p className="team__employ-job">Commodo tempor</p>
                  </div>
                  <div className="team__employ-links">
                    <Link className="team__employ-social inst" to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18">
                        <path
                          fill="#888"
                          d="M3.588 16.94c-1.95-.505-3.114-1.775-3.424-3.75-.23-1.45-.255-8.19.164-9.654C.874 1.629 2.147.51 4.075.193 4.95.05 6.658 0 8.385 0a85.7 85.7 0 0 1 4.199.098c1.18.062 2.261.442 3.14 1.284.835.8 1.263 1.802 1.371 2.935.128 1.353.211 7.748-.187 9.247-.533 1.96-1.813 3.12-3.797 3.439-.742.12-2.745.191-4.744.191-2.047 0-4.091-.075-4.779-.254zm.918-15.255c-1.5.172-2.508 1.098-2.747 2.59-.247 1.58-.245 7.492-.06 8.68.19 1.236.89 2.085 2.122 2.43.668.188 2.666.254 4.626.254 1.803 0 3.575-.056 4.24-.13 1.514-.165 2.515-1.097 2.754-2.602.247-1.513.247-7.03.106-8.446-.154-1.513-1.079-2.507-2.575-2.742-.74-.112-2.525-.162-4.3-.162-1.712 0-3.416.047-4.166.128zM4.19 8.597a4.443 4.443 0 0 1 4.446-4.406 4.37 4.37 0 0 1 4.372 4.413 4.451 4.451 0 0 1-4.446 4.406A4.366 4.366 0 0 1 4.19 8.597zm1.553-.027a2.827 2.827 0 0 0 2.803 2.879h.026a2.88 2.88 0 0 0 2.876-2.824 2.823 2.823 0 0 0-2.803-2.88H8.62A2.88 2.88 0 0 0 5.744 8.57zm6.444-4.551a1.034 1.034 0 0 1 1.03-1.03h.013c.567 0 1.026.464 1.021 1.037a1.043 1.043 0 0 1-1.043 1.029 1.028 1.028 0 0 1-1.021-1.036z"
                        />
                      </svg>
                    </Link>
                    <Link className="team__employ-social google" to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="15"
                        viewBox="0 0 23 15">
                        <path
                          fill="#888"
                          d="M6.751 14.35c-1.409-.083-2.69-.525-3.823-1.36C1.466 11.911.545 10.474.158 8.7A6.496 6.496 0 0 1 .02 6.768a7.044 7.044 0 0 1 1.62-4.102C2.658 1.415 3.955.6 5.505.207a5.8 5.8 0 0 1 1.19-.186C6.922.013 7.15 0 7.378 0a6.741 6.741 0 0 1 3.398.932c.7.4 1.098.808 1.27.932-.717.705-1.405 1.395-2.108 2.086-.522-.45-1.099-.863-2.099-1.016a4.322 4.322 0 0 0-.613-.044c-2.007 0-3.688 1.45-4.136 3.353a3.942 3.942 0 0 0-.1 1.298c.153 1.768 1.337 3.218 2.935 3.736.407.128.83.189 1.254.189.1 0 .198-.003.298-.01.753-.048 1.459-.248 2.098-.67 1.075-.732 1.423-1.878 1.425-2.161H7.154l.021-2.77.007-.117h6.754c.364 2.107.036 4.323-1.275 6.056-.907 1.195-2.114 1.948-3.554 2.32a7.734 7.734 0 0 1-2.356.236zm11.439-4.054v-.07l.019-2.43h-2.507V7.72l.015-1.816v-.07h2.507l.018-2.437v-.069h1.962v.07l-.02 2.437h2.507v.069l-.014 1.816v.076H20.17l-.019 2.43v.07z"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team__employ-item">
                <img
                  className="team__employ-img"
                  src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/employ-3.jpg"
                  alt="employ"
                />
                <div className="team__employ-info">
                  <div className="team__employ-names">
                    <h6 className="team__employ-name">Ruby M.</h6>
                    <p className="team__employ-job">Commodo tempor</p>
                  </div>
                  <div className="team__employ-links">
                    <Link className="team__employ-social inst" to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18">
                        <path
                          fill="#888"
                          d="M3.588 16.94c-1.95-.505-3.114-1.775-3.424-3.75-.23-1.45-.255-8.19.164-9.654C.874 1.629 2.147.51 4.075.193 4.95.05 6.658 0 8.385 0a85.7 85.7 0 0 1 4.199.098c1.18.062 2.261.442 3.14 1.284.835.8 1.263 1.802 1.371 2.935.128 1.353.211 7.748-.187 9.247-.533 1.96-1.813 3.12-3.797 3.439-.742.12-2.745.191-4.744.191-2.047 0-4.091-.075-4.779-.254zm.918-15.255c-1.5.172-2.508 1.098-2.747 2.59-.247 1.58-.245 7.492-.06 8.68.19 1.236.89 2.085 2.122 2.43.668.188 2.666.254 4.626.254 1.803 0 3.575-.056 4.24-.13 1.514-.165 2.515-1.097 2.754-2.602.247-1.513.247-7.03.106-8.446-.154-1.513-1.079-2.507-2.575-2.742-.74-.112-2.525-.162-4.3-.162-1.712 0-3.416.047-4.166.128zM4.19 8.597a4.443 4.443 0 0 1 4.446-4.406 4.37 4.37 0 0 1 4.372 4.413 4.451 4.451 0 0 1-4.446 4.406A4.366 4.366 0 0 1 4.19 8.597zm1.553-.027a2.827 2.827 0 0 0 2.803 2.879h.026a2.88 2.88 0 0 0 2.876-2.824 2.823 2.823 0 0 0-2.803-2.88H8.62A2.88 2.88 0 0 0 5.744 8.57zm6.444-4.551a1.034 1.034 0 0 1 1.03-1.03h.013c.567 0 1.026.464 1.021 1.037a1.043 1.043 0 0 1-1.043 1.029 1.028 1.028 0 0 1-1.021-1.036z"
                        />
                      </svg>
                    </Link>
                    <Link className="team__employ-social google" to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="15"
                        viewBox="0 0 23 15">
                        <path
                          fill="#888"
                          d="M6.751 14.35c-1.409-.083-2.69-.525-3.823-1.36C1.466 11.911.545 10.474.158 8.7A6.496 6.496 0 0 1 .02 6.768a7.044 7.044 0 0 1 1.62-4.102C2.658 1.415 3.955.6 5.505.207a5.8 5.8 0 0 1 1.19-.186C6.922.013 7.15 0 7.378 0a6.741 6.741 0 0 1 3.398.932c.7.4 1.098.808 1.27.932-.717.705-1.405 1.395-2.108 2.086-.522-.45-1.099-.863-2.099-1.016a4.322 4.322 0 0 0-.613-.044c-2.007 0-3.688 1.45-4.136 3.353a3.942 3.942 0 0 0-.1 1.298c.153 1.768 1.337 3.218 2.935 3.736.407.128.83.189 1.254.189.1 0 .198-.003.298-.01.753-.048 1.459-.248 2.098-.67 1.075-.732 1.423-1.878 1.425-2.161H7.154l.021-2.77.007-.117h6.754c.364 2.107.036 4.323-1.275 6.056-.907 1.195-2.114 1.948-3.554 2.32a7.734 7.734 0 0 1-2.356.236zm11.439-4.054v-.07l.019-2.43h-2.507V7.72l.015-1.816v-.07h2.507l.018-2.437v-.069h1.962v.07l-.02 2.437h2.507v.069l-.014 1.816v.076H20.17l-.019 2.43v.07z"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team__employ-item">
                <img
                  className="team__employ-img"
                  src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/content/about/employ-4.jpg"
                  alt="employ"
                />
                <div className="team__employ-info">
                  <div className="team__employ-names">
                    <h6 className="team__employ-name">Marie F. Bloss</h6>
                    <p className="team__employ-job">Commodo tempor</p>
                  </div>
                  <div className="team__employ-links">
                    <Link className="team__employ-social inst" to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18">
                        <path
                          fill="#888"
                          d="M3.588 16.94c-1.95-.505-3.114-1.775-3.424-3.75-.23-1.45-.255-8.19.164-9.654C.874 1.629 2.147.51 4.075.193 4.95.05 6.658 0 8.385 0a85.7 85.7 0 0 1 4.199.098c1.18.062 2.261.442 3.14 1.284.835.8 1.263 1.802 1.371 2.935.128 1.353.211 7.748-.187 9.247-.533 1.96-1.813 3.12-3.797 3.439-.742.12-2.745.191-4.744.191-2.047 0-4.091-.075-4.779-.254zm.918-15.255c-1.5.172-2.508 1.098-2.747 2.59-.247 1.58-.245 7.492-.06 8.68.19 1.236.89 2.085 2.122 2.43.668.188 2.666.254 4.626.254 1.803 0 3.575-.056 4.24-.13 1.514-.165 2.515-1.097 2.754-2.602.247-1.513.247-7.03.106-8.446-.154-1.513-1.079-2.507-2.575-2.742-.74-.112-2.525-.162-4.3-.162-1.712 0-3.416.047-4.166.128zM4.19 8.597a4.443 4.443 0 0 1 4.446-4.406 4.37 4.37 0 0 1 4.372 4.413 4.451 4.451 0 0 1-4.446 4.406A4.366 4.366 0 0 1 4.19 8.597zm1.553-.027a2.827 2.827 0 0 0 2.803 2.879h.026a2.88 2.88 0 0 0 2.876-2.824 2.823 2.823 0 0 0-2.803-2.88H8.62A2.88 2.88 0 0 0 5.744 8.57zm6.444-4.551a1.034 1.034 0 0 1 1.03-1.03h.013c.567 0 1.026.464 1.021 1.037a1.043 1.043 0 0 1-1.043 1.029 1.028 1.028 0 0 1-1.021-1.036z"
                        />
                      </svg>
                    </Link>
                    <Link className="team__employ-social google" to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="15"
                        viewBox="0 0 23 15">
                        <path
                          fill="#888"
                          d="M6.751 14.35c-1.409-.083-2.69-.525-3.823-1.36C1.466 11.911.545 10.474.158 8.7A6.496 6.496 0 0 1 .02 6.768a7.044 7.044 0 0 1 1.62-4.102C2.658 1.415 3.955.6 5.505.207a5.8 5.8 0 0 1 1.19-.186C6.922.013 7.15 0 7.378 0a6.741 6.741 0 0 1 3.398.932c.7.4 1.098.808 1.27.932-.717.705-1.405 1.395-2.108 2.086-.522-.45-1.099-.863-2.099-1.016a4.322 4.322 0 0 0-.613-.044c-2.007 0-3.688 1.45-4.136 3.353a3.942 3.942 0 0 0-.1 1.298c.153 1.768 1.337 3.218 2.935 3.736.407.128.83.189 1.254.189.1 0 .198-.003.298-.01.753-.048 1.459-.248 2.098-.67 1.075-.732 1.423-1.878 1.425-2.161H7.154l.021-2.77.007-.117h6.754c.364 2.107.036 4.323-1.275 6.056-.907 1.195-2.114 1.948-3.554 2.32a7.734 7.734 0 0 1-2.356.236zm11.439-4.054v-.07l.019-2.43h-2.507V7.72l.015-1.816v-.07h2.507l.018-2.437v-.069h1.962v.07l-.02 2.437h2.507v.069l-.014 1.816v.076H20.17l-.019 2.43v.07z"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Articles />
    </main>
  )
}

export default About
