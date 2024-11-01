import Logo from '../../assets/logo.png';

function Navbar() {
  return (
      <div className="navbar">
          <div className="navbar-left">
              <img src={Logo} alt="Logo" />
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </div>
    </div>
  )
}

export default Navbar