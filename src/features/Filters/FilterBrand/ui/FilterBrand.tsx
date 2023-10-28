import TitleLine from 'assets/images/icons/title-line.png'
import s from './FilterBrand.module.scss'

export const FilterBrand = () => {
  return (
    // <div className={s.filterBrand !== undefined ? `${s.filterBrand} filter` : `filter`}>
    <div className={`${s.filterBrand ?? ''} filter`}>
      <div className="filter__title">
        <h4>BRAND</h4>
        <img src={TitleLine} alt="line" />
      </div>
      <div>
        <label className={s.filterBrand__label}>
          <input type="checkbox" />
          <div className={s.filterBrand__productInfo}>
            <span>RFL</span>
            <span>(10)</span>
          </div>
        </label>
        <label className={s.filterBrand__label}>
          <input type="checkbox" />
          <div className={s.filterBrand__productInfo}>
            <span>Brothers</span>
            <span>(21)</span>
          </div>
        </label>
        <label className={s.filterBrand__label}>
          <input type="checkbox" />
          <div className={s.filterBrand__productInfo}>
            <span>Regal</span>
            <span>(3)</span>
          </div>
        </label>
        <label className={s.filterBrand__label}>
          <input type="checkbox" />
          <div className={s.filterBrand__productInfo}>
            <span>Nadia</span>
            <span>(14)</span>
          </div>
        </label>
        <label className={s.filterBrand__label}>
          <input type="checkbox" />
          <div className={s.filterBrand__productInfo}>
            <span>Otobi</span>
            <span>(6)</span>
          </div>
        </label>
      </div>
    </div>
  )
}
