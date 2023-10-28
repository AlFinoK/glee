import s from './FooterForm.module.scss'

export const FooterForm = () => {
  return (
    <form className={s.form} action="#">
      <input className={s.form__input} type="email" required placeholder="Email address" />
      <button className={s.form__btn} type="submit">
        Subscribe
      </button>
    </form>
  )
}
