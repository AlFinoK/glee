import { Breadcrumbs } from 'features/Breadcrumbs'
import { Articles } from 'shared/Articles/UI'
import { Achievements } from './Achievements'
import { Team } from './Team'
import { MainSection } from './MainSection'

const AboutPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <MainSection />
      <Achievements />
      <Team />
      <Articles />
    </main>
  )
}

export default AboutPage
