import TitleLine from 'assets/images/icons/title-line.png'

const FilterBrand = () => {
  return (
    <div className="filter-brand filter">
      <div className="filter__title">
        <h4>BRAND</h4>
        <img src={TitleLine} alt="line" />
      </div>
      <div className="filter-brand__items">
        <label className="filter-brand__label">
          <input className="filter-brand__input" type="checkbox" />
          <div className="filter-brand__product-info">
            <span className="filter-brand__product-name">RFL</span>
            <span className="filter-brand__product-count">(10)</span>
          </div>
        </label>
        <label className="filter-brand__label">
          <input className="filter-brand__input" type="checkbox" />
          <div className="filter-brand__product-info">
            <span className="filter-brand__product-name">Brothers</span>
            <span className="filter-brand__product-count">(21)</span>
          </div>
        </label>
        <label className="filter-brand__label">
          <input className="filter-brand__input" type="checkbox" />
          <div className="filter-brand__product-info">
            <span className="filter-brand__product-name">Regal</span>
            <span className="filter-brand__product-count">(3)</span>
          </div>
        </label>
        <label className="filter-brand__label">
          <input className="filter-brand__input" type="checkbox" />
          <div className="filter-brand__product-info">
            <span className="filter-brand__product-name">Nadia</span>
            <span className="filter-brand__product-count">(14)</span>
          </div>
        </label>
        <label className="filter-brand__label">
          <input className="filter-brand__input" type="checkbox" />
          <div className="filter-brand__product-info">
            <span className="filter-brand__product-name">Otobi</span>
            <span className="filter-brand__product-count">(6)</span>
          </div>
        </label>
      </div>
    </div>
  )
}

export default FilterBrand
