import { Route, Routes } from 'react-router-dom'

import { Header, Footer } from './layouts'
import {
  Home,
  About,
  Login,
  Contacts,
  ProductsShop,
  Blog,
  BlogDetails,
  ProductDetails,
  NotFound,
} from './pages'
import './styles/app.scss'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<ProductsShop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
