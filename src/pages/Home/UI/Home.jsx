import { Link } from 'react-router-dom'

import s from './Home.module.scss'
import { VideoPopup } from 'shared/UI/VideoPopup/UI/VideoPopup'
import { HomeSwiper } from 'widgets/HomeSwiper'
import { InfoBox } from './InfoBox'
import { FewGoods } from './FewGoods'
import { MainProductList } from 'widgets/MainProductList'
import { DesignProductList } from 'widgets/DesignProductList'
import { Articles } from 'shared/Articles/UI/Articles'

export const HomePage = () => {
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
