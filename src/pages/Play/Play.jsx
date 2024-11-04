import './Play.css'
import Arrow from '../../assets/back_arrow_icon.png'


function Play() {
  return (
    <div className="player">
      <img src={Arrow} alt="Arrow" />
      <iframe
        src="https://www.youtube.com/embed/mzs2CP5v6bw" width="90%" height="90%"
        title='Trailer' allowFullScreen="true"
          ></iframe>
          <div className="player-info">
              <p>Published Date</p>
              <p>Name</p>
              <p>Type</p>
          </div>
    </div>
  );
}

export default Play