import { Route, Routes } from 'react-router-dom'

import './styles/app.scss'
import { LOGIN_ROUTE } from './utils/consts'
import { MainLayout } from './layouts'
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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<ProductsShop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
