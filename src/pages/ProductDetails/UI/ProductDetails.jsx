import s from './ProductDetails.module.scss'
import { MainSection } from './MainSection'
import { Articles } from 'shared/Articles/UI/Articles'
import { Breadcrumbs } from 'features/Breadcrumbs'
import { RelatedProducts } from './RelatedProducts'

export const ProductDetailsPage = () => {
  return (
    <main className="main">
      <Breadcrumbs />
      <MainSection />
      <RelatedProducts />
      <Articles />
    </main>
  )
}
