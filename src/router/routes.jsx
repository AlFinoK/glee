import {
  BASKET_ROUTE,
  ADMIN_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  DEVICE_ROUTE,
  REGISTRATION_ROUTE,
} from '../utils/consts'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  { path: BASKET_ROUTE, Component: Basket },
]

export const publicRoutes = [
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
