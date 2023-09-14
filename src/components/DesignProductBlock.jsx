import React from 'react'
import style from '../styles/DesignProductBlock.module.scss'

const DesignProductBlock = ({ title, type, imageUrl }) => {
  return (
    <div className="design-product__content-item">
      <div className="design-product__content-img">
        <img src={imageUrl} alt="design product" />
      </div>
      <div className="design-product__content-box">
        <h5 className="design-product__content-title">{title}</h5>
        <p className="design-product__content-type">{type}</p>
      </div>
    </div>
  )
}

export default DesignProductBlock
