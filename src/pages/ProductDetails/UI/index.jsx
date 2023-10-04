import s from './styles.module.scss'
import { MainSection } from './MainSection'
import { Articles } from 'shared/Articles/UI'
import { Breadcrumbs } from 'features/Breadcrumbs'
import { RelatedProducts } from './RelatedProducts'

const ProductDetailsPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <MainSection />
      <RelatedProducts />
      <Articles />
    </main>
  )
}

export default ProductDetailsPage
