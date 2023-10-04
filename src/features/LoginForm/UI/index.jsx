import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <form className="modal__form">
      <label className="modal__label">
        Username or email address *
        <input className="modal__input" type="text" required />
      </label>
      <label className="modal__label">
        Password *
        <input className="modal__input" type="password" required />
      </label>
      <button className="modal__btn" type="submit">
        Login
      </button>
      <div className="modal__choose-box">
        <label className="modal__label modal__links">
          <input className="modal__checkbox" type="checkbox" />
          Remember me
        </label>
        <Link className="modal__link modal__link-lost" to="/">
          Lost your password?
        </Link>
      </div>
      <div className="modal__link-box">
        <Link className="modal__link" to="/">
          Not registered? No problem
        </Link>
      </div>
      <Link className="modal__register-btn" to="/">
        Create an account
      </Link>
    </form>
  )
}

export default LoginForm
