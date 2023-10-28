import s from './Blog.module.scss'
import { Partners } from 'shared/Partners/ui/Partners'
import { Breadcrumbs } from 'features/Breadcrumbs'
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
