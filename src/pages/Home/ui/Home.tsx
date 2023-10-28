import s from './Home.module.scss'
import { VideoPopup } from 'shared/ui/VideoPopup/ui/VideoPopup'
import { HomeSwiper } from 'widgets/HomeSwiper'
import { InfoBox } from './InfoBox'
import { FewGoods } from './FewGoods'
import { MainProductBlock } from 'widgets/MainProductBlock'
import { DesignProductList } from 'widgets/DesignProductList'
import { Articles } from 'shared/Articles/ui/Articles'

export const HomePage = () => {
  return (
    <main className="main">
      <HomeSwiper />
      <InfoBox />
      <MainProductBlock />
      <FewGoods />
      <DesignProductList />
      <VideoPopup />
      <Articles />
    </main>
  )
}
