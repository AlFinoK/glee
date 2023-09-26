import { useState } from 'react'
import TitleLine from '../../assets/images/icons/title-line.png'

const FilterCategory = () => {
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
    <div className="filter-category filter select-none">
      <div className="filter__title">
        <h4>CATEGORY</h4>
        <img src={TitleLine} alt="line" />
      </div>
      <ul className="filter-category__list">
        {categoryNames.map((value, i) => (
          <li
            key={value}
            onClick={() => setActiveItem(i)}
            className={
              activeItem == i
                ? 'filter-category__item filter-category__item-selected'
                : 'filter-category__item'
            }>
            <span className="filter-category__name">{value}</span>
            <div
              onClick={() => onClickItem(i)}
              className={
                activeBtn == i
                  ? 'filter-category__btn filter-category__btn-active'
                  : 'filter-category__btn'
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
          <ul className="filter-category__sub-list">
            <li className="filter-category__item filter-category__item-selected">
              <span className="filter-category__name">Table</span>
              <div className="filter-category__btn">
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

export default FilterCategory
