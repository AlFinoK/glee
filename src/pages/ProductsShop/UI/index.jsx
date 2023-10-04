import s from './styles.module.scss'

import Breadcrumbs from 'features/Breadcrumbs'
import { ProductsSection } from './ProductsSection'

const ProductsShopPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <ProductsSection />
    </main>
  )
}

export default ProductsShopPage
