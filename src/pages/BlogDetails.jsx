import { Partners, Top } from '../layouts'
import { RecentPosts, FilterCategory, FilterSearch } from '../components/Filters'

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
