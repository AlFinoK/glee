import { Link } from 'react-router-dom'
import s from './VideoPopup.module.scss'
import PopupBtn from 'assets/images/icons/popup-btn.svg'

export const VideoPopup = () => {
  return (
    <div className={s.videoPopup}>
      <Link to="/">
        <img src={PopupBtn} alt="popup button" />
      </Link>
      <div id="popup">
        <div>
          <div>
            {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/W1azwtfGAMI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen></iframe> */}
          </div>
        </div>
      </div>
    </div>
  )
}
