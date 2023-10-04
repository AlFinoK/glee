import s from './styles.module.scss'
import { Partners } from 'shared/Partners/UI/Partners'
import { LoginForm } from 'features/LoginForm'
import { Breadcrumbs } from 'features/Breadcrumbs'

const LoginPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <section className="modal">
        <div className="container">
          <LoginForm />
        </div>
      </section>
      <Partners />
    </main>
  )
}

export default LoginPage
