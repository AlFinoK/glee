import TitleLine from 'assets/images/icons/title-line.png'
import s from './FilterSearch.module.scss'

export const FilterSearch = () => {
  return (
    <div className={s.filterSearch}>
      <div className="filter__title">
        <h4>SEARCH</h4>
        <img src={TitleLine} alt="line" />
      </div>
      <label className={s.filterSearch__label}>
        <input className={s.filterSearch__input} type="text" />
        <button className={s.filterSearch__btn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
              fill="#094074"
              d="M3.702 6.076c.356-.065.68.13.746.484.096.582.355 1.067.78 1.49.42.388.941.677 1.493.776.325.066.552.39.487.743a.643.643 0 0 1-.714.516 4.2 4.2 0 0 1-2.143-1.13 4.164 4.164 0 0 1-1.136-2.137c-.065-.354.128-.676.487-.742zM6.98-.004c3.465 0 6.279 2.8 6.279 6.257 0 .93-.203 1.812-.568 2.604l2.336 2.036c1.703 1.747.746 3.266.294 3.717-.422.454-1.994 1.415-3.73-.292l-2.06-2.35c-.78.345-1.64.539-2.548.539-3.468 0-6.278-2.802-6.278-6.257 0-3.456 2.807-6.254 6.275-6.254zm5.546 13.517c.293.324 1.126.867 1.88.226.21-.176.634-1.068-.227-1.873l-2.162-1.88a6.269 6.269 0 0 1-1.363 1.34zM6.98 11.201c2.742 0 4.966-2.216 4.966-4.948S9.722 1.305 6.98 1.305 2.015 3.521 2.015 6.253s2.22 4.948 4.965 4.948z"
            />
          </svg>
        </button>
      </label>
    </div>
  )
}
