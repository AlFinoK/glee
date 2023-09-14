import { Outlet } from 'react-router-dom'
import MenuList from './MenuList'

const MainLayout = () => {
  return (
    <>
      <MenuList />
      <Outlet />
    </>
  )
}

export default MainLayout
