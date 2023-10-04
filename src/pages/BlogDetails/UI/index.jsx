import { Partners } from 'shared/Partners/UI/Partners'
import { Breadcrumbs } from 'features/Breadcrumbs'
import { MainSection } from './MainSection'
import s from './styles.module.scss'

const BlogDetailsPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <MainSection />
      <Partners />
    </main>
  )
}

export default BlogDetailsPage
