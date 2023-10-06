import s from './Contacts.module.scss'
import { Breadcrumbs } from 'features/Breadcrumbs'
import { MainSection } from './MainSection/MainSection'
import { Articles } from 'shared/Articles'

export const ContactsPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <MainSection />
      <Articles />
    </main>
  )
}
