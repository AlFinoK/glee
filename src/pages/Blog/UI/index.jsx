import { Partners } from 'shared/Partners/UI/Partners'
import { Breadcrumbs } from 'features/Breadcrumbs'
import s from './styles.module.scss'
import { MainSection } from './MainSection'

const BlogPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <MainSection />
      <Partners />
    </main>
  )
}

export default BlogPage
