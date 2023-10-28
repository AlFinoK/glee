import { Route, Routes } from 'react-router-dom'
import { LOGIN_ROUTE } from 'app/consts/route.ts'
import 'app/styles/index.scss'

import { HomePage } from 'pages/Home'
import { AboutPage } from 'pages/About'
import { LoginPage } from 'pages/Login'
import { ContactsPage } from 'pages/Contacts'
import { ProductsShopPage } from 'pages/ProductsShop'
import { BlogPage } from 'pages/Blog'
import { BlogDetailsPage } from 'pages/BlogDetails'
import { ProductDetailsPage } from 'pages/ProductDetails'
import { NotFoundPage } from 'pages/NotFound'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/products" element={<ProductsShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path={LOGIN_ROUTE} element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
