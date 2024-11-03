import './Footer.css'
import Youtube from '../../assets/youtube_icon.png'
import Facebook from '../../assets/facebook_icon.png'
import Twitter from '../../assets/twitter_icon.png'
import Instagram from '../../assets/instagram_icon.png'

function Footer() {
  return (
      <div className='footer'>
          <div className="footer-icons">
              <img src={Youtube} alt="YouTube" />
              <img src={Facebook} alt="Facebook" />
              <img src={Twitter} alt="Twitter" />
              <img src={Instagram} alt="Instagram" />
          </div> 
    </div>
  )
}

export default Footer