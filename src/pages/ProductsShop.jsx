import { Pagination } from '@mui/material'

import Top from '../layouts/Breadcrumbs/Top'
import Partners from '../layouts/Partners'
import ProductItems from '../components/ProductItems'
import FilterPrice from '../components/Filters/FilterPrice'
import FilterBrand from '../components/Filters/FilterBrand'
import FilterCategory from '../components/Filters/FilterCategory'
import RecentProducts from '../components/Filters/RecentProducts'

const ProductsShop = () => {
  return (
    <main className="main">
      <Top />
      <section className="products">
        <div className="container">
          <div className="products__inner">
            <div className="filters">
              <FilterCategory />
              <FilterPrice />
              <FilterBrand />
              <RecentProducts />
            </div>
            <div className="products__wrapper">
              <ProductItems />
            </div>
          </div>
          <Pagination></Pagination>
        </div>
        <Partners />
      </section>
    </main>
  )
}

export default ProductsShop
