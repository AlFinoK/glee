import { PagesNav } from 'features/PagesNav'
import s from './MainSection.module.scss'
import { FilterCategory } from 'features/Filters'
import { FilterSearch } from 'features/Filters'
import { BlogItems } from '../../BlogItems'

export const MainSection = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog__inner">
          <BlogItems />
          <div className="blog-aside">
            <div className="filters">
              <FilterSearch />
              <FilterCategory />
              <RecentPosts />
            </div>
          </div>
        </div>
        <PagesNav />
      </div>
    </section>
  )
}
