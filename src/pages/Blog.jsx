import { Pagination } from '@mui/material'

import Top from '../layouts/Top'
import Partners from '../layouts/Partners'
import BlogItems from '../components/BlogItems'
import { RecentPosts, FilterCategory, FilterSearch } from '../components/Filters'

const Blog = () => {
  return (
    <main className="main">
      <Top />
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

export default Blog
