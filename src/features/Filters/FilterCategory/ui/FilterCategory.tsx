import { useState } from 'react'
import TitleLine from 'assets/images/icons/title-line.png'
import s from './FilterCategory.module.scss'

export const FilterCategory = () => {
  const categoryNames = ['Chair', 'Table', 'Lamp', 'Watch', 'Clock']
  const [isOpen, setIsOpen] = useState(false)
  const [activeBtn, setActiveBtn] = useState(null)
  const [activeItem, setActiveItem] = useState(false)

  const onClickItem = (i) => {
    if (activeBtn == i) {
      setActiveBtn(null)
    }
    if (activeBtn !== i) {
      setIsOpen(!isOpen)
      setActiveBtn(i)
    }
  }

  return (
    <div className={`${s.filterCategory} ${s.filter}`}>
      <div className="filter__title">
        <h4>CATEGORY</h4>
        <img src={TitleLine} alt="line" />
      </div>
      <ul className={s.filterCategory__list}>
        {categoryNames.map((value, i) => (
          <li
            key={value}
            onClick={() => setActiveItem(i)}
            className={
              activeItem === i
                ? `${s.filterCategory__item} ${s.filterCategory__itemSelected}`
                : `${s.filterCategory__item}`
            }>
            <span className={s.filterCategory__name}>{value}</span>
            <div
              onClick={() => onClickItem(i)}
              className={
                activeBtn === i
                  ? `${s.filterCategory__btn} ${s.filterCategory__btnActive}`
                  : `${s.filterCategory__btn}`
              }>
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12">
                <path
                  fill="#262626"
                  d="M1.333 11.687c-.15 0-.3-.061-.41-.183a.6.6 0 0 1 .021-.831l4.547-4.475L.944 1.724a.596.596 0 0 1-.177-.427c0-.145.052-.29.155-.404a.551.551 0 0 1 .8-.023L6.7 5.768l.014.014a.563.563 0 0 1 .113.169h.001a.61.61 0 0 1 .052.244v.003c0 .086-.018.17-.053.25v.001a.602.602 0 0 1-.112.165l-.015.014-4.977 4.899a.55.55 0 0 1-.39.16z"
                />
              </svg>
            </div>
          </li>
        ))}
        {isOpen && (
          <ul className={s.filterCategory__subList}>
            <li className={`${s.filterCategory__item} ${s.filterCategory__itemSelected}`}>
              <span className={s.filterCategory__name}>Table</span>
              <div className={s.filterCategory__btn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12">
                  <path
                    fill="#262626"
                    d="M1.333 11.687c-.15 0-.3-.061-.41-.183a.6.6 0 0 1 .021-.831l4.547-4.475L.944 1.724a.596.596 0 0 1-.177-.427c0-.145.052-.29.155-.404a.551.551 0 0 1 .8-.023L6.7 5.768l.014.014a.563.563 0 0 1 .113.169h.001a.61.61 0 0 1 .052.244v.003c0 .086-.018.17-.053.25v.001a.602.602 0 0 1-.112.165l-.015.014-4.977 4.899a.55.55 0 0 1-.39.16z"
                  />
                </svg>
              </div>
            </li>
          </ul>
        )}
      </ul>
    </div>
  )
}
