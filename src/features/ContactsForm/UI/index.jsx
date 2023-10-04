import s from './styles.module.scss'

const ContactsForm = () => {
  return (
    <form className="getintouch__form">
      <label className="getintouch__label">
        <div className="getintouch__input-wrapper">
          <input className="getintouch__input" type="text" placeholder="NAME" />
          <input className="getintouch__input" type="email" placeholder="EMAIL" />
        </div>
        <textarea
          className="getintouch__area"
          placeholder="MESSAGE"
          rows="5"
          cols="33"
          maxLength="250"></textarea>
      </label>
      <button className="getintouch__btn" type="submit">
        SEND MESSAGE
      </button>
    </form>
  )
}

export default ContactsForm
