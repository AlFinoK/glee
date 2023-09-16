import { Pagination } from '@mui/material'

import { Partners, Top } from '../layouts'
import { ProductItems } from '../components'
import { FilterPrice, FilterBrand, FilterCategory, RecentProducts } from '../components/Filters'

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
