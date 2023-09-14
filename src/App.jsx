import './styles/app.scss'

import { Route, Routes } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Contacts from './pages/Contacts'
import ProductsShop from './pages/ProductsShop'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<ProductsShop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
