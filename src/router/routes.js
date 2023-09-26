import {
  BASKET_ROUTE,
  ADMIN_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  DEVICE_ROUTE,
  REGISTRATION_ROUTE,
} from '../utils/consts'

const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  { path: BASKET_ROUTE, Component: Basket },
]

const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: Device,
  },
]

export { authRoutes, publicRoutes }
