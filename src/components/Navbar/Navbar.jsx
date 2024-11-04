import Logo from '../../assets/logo.png';
import SearchIcon from '../../assets/search_icon.svg';
import BellIcon from '../../assets/bell_icon.svg';
import ProfileImg from '../../assets/profile_img.png';
import CaretIcon from '../../assets/caret_icon.svg';
import './Navbar.css';
import { useRef, useEffect } from 'react';

function Navbar() {
    const navRef = useRef();

    useEffect(() => { 
        if (window.scrollY >= 80) {
            navRef.current.classList.add('dark-nav');
        } else { 
            navRef.current.classList.remove('dark-nav');
        }
    }, [])
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
                  <img src={ProfileImg} alt="Profile Icon" className='profile' />
                  <img src={CaretIcon} alt="Caret" />
                  <div className="dropdown">
                      <p>Sign Out of NetFlix</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar