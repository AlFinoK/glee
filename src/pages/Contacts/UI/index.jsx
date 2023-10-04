import s from './styles.module.scss'
import Breadcrumbs from 'features/Breadcrumbs'
import MainSection from './MainSection'

const ContactsPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <MainSection />
      <Articles />
    </main>
  )
}

export default ContactsPage
