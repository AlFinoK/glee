import { FilterCategory } from 'features/Filters'
import { FilterSearch } from 'features/Filters'
import s from './styles.module.scss'
import { RecentPostList } from 'widgets/RecentPostList'

const MainSection = () => {
  return (
    <section className="blogDetails">
      <div className="container">
        <div className="blog__inner">
          <div className="blog-aside">
            <div className="filters">
              <FilterSearch />
              <FilterCategory />
              <RecentPostList />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection
