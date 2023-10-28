import { Breadcrumbs } from 'features/Breadcrumbs'
import { Articles } from 'shared/Articles/ui/Articles'
import { Achievements } from './Achievements'
import { Team } from './Team'
import { MainSection } from './MainSection'

export const AboutPage = () => {
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
