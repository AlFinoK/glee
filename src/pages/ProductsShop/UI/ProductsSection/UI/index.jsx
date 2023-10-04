import s from './styles.module.scss'
import { Pagination } from 'features/PagesNav'
import { FilterCategory } from 'features/Filters'
import { FilterPrice } from 'features/Filters'
import { FilterBrand } from 'features/Filters'
import { Partners } from 'shared/Partners/UI/Partners'
import ProductItems from 'widgets/ProductItems'

const ProductsSection = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products__inner">
          <div className="filters">
            <FilterCategory />
            <FilterPrice />
            <FilterBrand />
            <RecentProducts />
          </div>
          <ProductItems />
        </div>
        <Pagination />
      </div>
      <Partners />
    </section>
  )
}

export default ProductsSection
