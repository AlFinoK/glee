import { Partners } from '@shared/Partners'
import { Breadcrumbs } from '@features/Breadcrumbs'
import { RecentPosts, FilterCategory, FilterSearch } from '@features/filters'
import s from './styles.module.scss'

const BlogDetailsPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <section className="blogDetails">
        <div className="container">
          <div className="blog__inner">
            <div className="blog-aside">
              <div className="filters">
                <FilterSearch />
                <FilterCategory />
                <RecentPosts />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Partners />
    </main>
  )
}

export default BlogDetailsPage
