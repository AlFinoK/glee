import { Pagination } from 'features/PagesNav'
import s from './styles.module.scss'
import { FilterCategory } from 'features/Filters'
import { FilterSearch } from 'features/Filters'
import { BlogItems } from '../../BlogItems'

const MainSection = () => {
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
        <Pagination />
      </div>
    </section>
  )
}

export default MainSection
