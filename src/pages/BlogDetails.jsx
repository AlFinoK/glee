import Top from '../layouts/Breadcrumbs/Top'
import Partners from '../layouts/Partners'
import RecentPosts from '../components/Filters/RecentPosts'
import FilterCategory from '../components/Filters/FilterCategory'
import FilterSearch from '../components/Filters/FilterSearch'

const Blog = () => {
  return (
    <main className="main">
      <Top />
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

export default Blog
