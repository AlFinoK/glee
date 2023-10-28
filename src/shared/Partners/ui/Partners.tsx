import s from './Partners.module.scss'

export const Partners = () => {
  return (
    <div className={s.partners}>
      <div className="container">
        <div className={s.partners__inner}>
          <img
            src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/icons/partner-1.png"
            alt="partner"
          />
          <img
            src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/icons/partner-2.png"
            alt="partner"
          />
          <img
            src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/icons/partner-3.png"
            alt="partner"
          />
          <img
            src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/icons/partner-4.png"
            alt="partner"
          />
          <img
            src="https://gleefilesbucket.s3.eu-central-1.amazonaws.com/images-glee/icons/partner-5.png"
            alt="partner"
          />
        </div>
      </div>
    </div>
  )
}
