import s from './Login.module.scss'
import { Partners } from 'shared/Partners'
import { LoginForm } from 'features/LoginForm'
import { Breadcrumbs } from 'features/Breadcrumbs'

export const LoginPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <section className={s.login}>
        <div className="container">
          <LoginForm />
        </div>
      </section>
      <Partners />
    </main>
  )
}
