import { Partners } from 'shared/Partners/UI/Partners'
import { Breadcrumbs } from 'features/Breadcrumbs'
import s from './Blog.module.scss'
import { MainSection } from './MainSection'

export const BlogPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <MainSection />
      <Partners />
    </main>
  )
}
