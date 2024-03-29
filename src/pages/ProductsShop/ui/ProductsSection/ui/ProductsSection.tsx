import s from './ProductsSection.module.scss'
import { PagesNav } from 'features/PagesNav'
import { FilterCategory } from 'features/Filters'
import { FilterPrice } from 'features/Filters'
import { FilterBrand } from 'features/Filters'
import { Partners } from 'shared/Partners/ui/Partners'
import { ProductItems } from 'widgets/ProductItems/ui/ProductItems'
import { RecentProductList } from 'widgets/RecentProductList'

export const ProductsSection = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products__inner">
          <div className="filters">
            <FilterCategory />
            <FilterPrice />
            <FilterBrand />
            <RecentProductList />
          </div>
          <ProductItems />
        </div>
        <PagesNav />
      </div>
      <Partners />
    </section>
  )
}
