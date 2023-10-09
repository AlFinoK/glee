import { useState } from 'react'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

import TitleLine from 'assets/images/icons/title-line.png'
import s from './FilterPrice.module.scss'

export const FilterPrice = () => {
  const [values, setValues] = useState([0, 1000])

  const handleChange = (event, newValue) => {
    setValues(newValue)
  }

  const valueText = (value) => {
    return `$${value}`
  }
  return (
    <div className="filter-price filter">
      <div className="filter__title">
        <h4>PRICE</h4>
        <img src={TitleLine} alt="line" />
      </div>
      <div className="filter-price__slider">
        <Slider
          className="filter-price__slider"
          min={0}
          max={1000}
          value={values}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
          aria-labelledby="range-slider"
        />
        <Typography gutterBottom>
          <div>
            <span>{valueText(values[0])}</span>
            <span>{valueText(values[1])}</span>
          </div>
        </Typography>
      </div>
    </div>
  )
}
