import { Articles, Top } from '../layouts'
import { Achievements } from './Achievements'

const AboutPage = () => {
  return (
    <main className="main">
      <Top />
      <AboutSection />
      <Achievements />
      <Team />
      <Articles />
    </main>
  )
}

export default AboutPage
