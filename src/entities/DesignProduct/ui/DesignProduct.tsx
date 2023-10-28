import s from './DesignProduct.module.scss'

export const DesignProduct = ({ title, description, imageUrl }) => {
  return (
    <div className={s.designProduct__contentItem}>
      <div className={s.designProduct__contentImg}>
        <img src={imageUrl} alt="design product" />
      </div>
      <div className={s.designProduct__contentBox}>
        <h5 className={s.designProduct__contentTitle}>{title}</h5>
        <p className={s.designProduct__contentType}>{description}</p>
      </div>
    </div>
  )
}
