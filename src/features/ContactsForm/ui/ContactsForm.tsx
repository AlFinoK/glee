import s from './ContactsForm.module.scss'

export const ContactsForm = () => {
  return (
    <form className="getintouch__form">
      <label className="getintouch__label">
        <div className={s.getintouch__inputWrapper}>
          <input className={s.getintouch__input} type="text" placeholder="NAME" />
          <input className={s.getintouch__input} type="email" placeholder="EMAIL" />
        </div>
        <textarea
          className={s.getintouch__area}
          placeholder="MESSAGE"
          rows={5}
          cols={33}
          maxLength={250}></textarea>
      </label>
      <button className={s.getintouch__btn} type="submit">
        SEND MESSAGE
      </button>
    </form>
  )
}
