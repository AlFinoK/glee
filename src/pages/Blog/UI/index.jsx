import { Pagination } from '@mui/material'

import Breadcrumbs from '@features/Breadcrumbs'
import Partners from '@shared/Partners'
import BlogItems from './BlogItems'
import { FilterCategory, FilterSearch } from '@features/filters'
import s from './styles.module.scss'

const BlogPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
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
          <Pagination></Pagination>
        </div>
      </section>
      <Partners />
    </main>
  )
}

export default BlogPage
