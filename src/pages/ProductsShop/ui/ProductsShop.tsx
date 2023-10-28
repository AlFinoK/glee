import s from './ProductsShop.module.scss'

import { Breadcrumbs } from 'features/Breadcrumbs'
import { ProductsSection } from './ProductsSection'

export const ProductsShopPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <ProductsSection />
    </main>
  )
}
