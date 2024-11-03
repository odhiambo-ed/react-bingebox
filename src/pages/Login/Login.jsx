import './Login.css'
import Logo from '../../assets/logo.png'

function Login() {
  return (
    <div className="login">
      <img src={Logo} alt="Logo" className="login-logo" />
      <div className="form">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-extra">
          <p>
            New to NetFlix? <span>Sign Up Now</span>
          </p>
          <p>
            Already have an account? <span>Sign In Now</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login