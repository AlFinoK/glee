import { Link } from 'react-router-dom'

import s from './styles.module.scss'
import { VideoPopup } from 'shared/UI/VideoPopup'
import { HomeSwiper } from 'widgets/HomeSwiper'
import { InfoBox } from './InfoBox'
import { FewGoods } from './FewGoods'
import { MainProductList } from 'widgets/MainProductList'
import { DesignProductList } from 'widgets/DesignProductList'
import Articles from 'shared/Articles/UI'

const HomePage = () => {
  return (
    <main className="main">
      <HomeSwiper />
      <InfoBox />
      <MainProductList />
      <FewGoods />
      <DesignProductList />
      <VideoPopup />
      <Articles />
    </main>
  )
}

export default HomePage
