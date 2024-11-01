import Logo from '../../assets/logo.png';
import SearchIcon from '../../assets/search_icon.svg';
import BellIcon from '../../assets/bell_icon.svg';

function Navbar() {
  return (
      <div className="navbar">
          <div className="navbar-left">
              <img src={Logo} alt="Logo" />
              <ul>
                  <li>Home</li>
                  <li>Tv Shows</li>
                  <li>Movies</li>
                  <li>New & Popular</li>
                  <li>My List</li>
                  <li>Browse by Languages</li>
              </ul>
          </div>
          <div className="navbar-right">
              <img src={SearchIcon} alt="Search Icon" className='icons' />
              <p>Children</p>
              <img src={BellIcon} alt="Bell Icon" className='icons' />
              <div className="navbar-profile">
                  <img src={BellIcon} alt="Bell Icon" className='icons' />
              </div>
          </div>
    </div>
  )
}

export default Navbar