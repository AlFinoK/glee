import { Pagination } from '@mui/material'

import Top from '../layouts/Breadcrumbs/Top'
import Partners from '../layouts/Partners'
import BlogItems from '../components/BlogItems'
import RecentPosts from '../components/Filters/RecentPosts'
import FilterCategory from '../components/Filters/FilterCategory'
import FilterSearch from '../components/Filters/FilterSearch'

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
