import { PagesNav } from 'features/PagesNav'
import s from './MainSection.module.scss'
import { FilterCategory } from 'features/Filters'
import { FilterSearch } from 'features/Filters'
import { BlogItems } from '../../BlogItems'
import { RecentPostList } from 'widgets/RecentPostList'

export const MainSection = () => {
  return (
    <section className={s.blog}>
      <div className="container">
        <div className={s.blog__inner}>
          <BlogItems />
          <div className={s.blogAside}>
            <div className="filters">
              <FilterSearch />
              <FilterCategory />
              <RecentPostList />
            </div>
          </div>
        </div>
        <PagesNav />
      </div>
    </section>
  )
}
