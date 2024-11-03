import { useState } from 'react';
import './Login.css'
import Logo from '../../assets/logo.png'

function Login() {
    // eslint-disable-next-line no-unused-vars
    const [loginState, setLoginState] = useState("Sign In")
  return (
    <div className="login">
      <img src={Logo} alt="Logo" className="login-logo" />
      <div className="form">
        <h2>{loginState}</h2>
        <form>
          {loginState === "Sign In" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" />
          )}
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />

          {loginState === "Sign In" ? (
            <></>
          ) : (
            <input type="password" placeholder="Confirm Password" />
          )}
                  <button type="submit">{ loginState }</button>
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
          {loginState === "Sign In" ? (
            <></>
          ) : (
            <p>
              Already have an account? <span>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login