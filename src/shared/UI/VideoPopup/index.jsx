import s from './styles.module.scss'
import PopupBtn from 'assets/images/icons/popup-btn.svg'

const VideoPopup = () => {
  return (
    <div className="video-popup">
      <Link className="popup-link" to="/">
        <img className="video-popup__img" src={PopupBtn} alt="popup button" />
      </Link>
      <div className="video-popup popup" id="popup">
        <div className="video-popup popup__body">
          <div className="video-popup popup__content">
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

export default VideoPopup
