import { Link } from 'react-router-dom'
import s from './LoginForm.module.scss'

export const LoginForm = () => {
  return (
    <form>
      <label>
        Username or email address *
        <input className={s.login__input} type="text" required />
      </label>
      <label>
        Password *
        <input className={s.login__input} type="password" required />
      </label>
      <button className={s.login__btn} type="submit">
        Login
      </button>
      <div className={s.login__chooseBox}>
        <label className={`${s.login__label} ${s.login__links}`}>
          <input className={s.login__checkbox} type="checkbox" />
          Remember me
        </label>
        <Link className={`${s.login__link} ${s.login__linkLost}`} to="/">
          Lost your password?
        </Link>
      </div>
      <div className={s.login__linkBox}>
        <Link to="/register">Not registered? No problem</Link>
      </div>
      <Link className={s.login__registerBtn} to="/">
        Create an account
      </Link>
    </form>
  )
}
