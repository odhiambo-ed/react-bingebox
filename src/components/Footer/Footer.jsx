import './Footer.css'
import Youtube from '../../assets/youtube_icon.png'
import Facebook from '../../assets/facebook_icon.png'
import Twitter from '../../assets/twitter_icon.png'
import Instagram from '../../assets/instagram_icon.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={Youtube} alt="YouTube" />
        <img src={Facebook} alt="Facebook" />
        <img src={Twitter} alt="Twitter" />
        <img src={Instagram} alt="Instagram" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright">&#169; 1997-2024 NetFlix, Inc.</p>
    </div>
  );
}

export default Footer