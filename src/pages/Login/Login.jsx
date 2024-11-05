import { useState } from "react";
import "./Login.css";
import Logo from "../../assets/logo.png";
import { signin, signup } from "../../firebase";

function Login() {
  const [loginState, setLoginState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    if (loginState == "Sign In") {
      await signin(email, password);
    } else {
      await signup(email, password, name);
    }
  }

  return (
    <div className="login">
      <img src={Logo} alt="Logo" className="login-logo" />
      <div className="form">
        <h2>{loginState}</h2>
        <form>
          {loginState === "Sign In" ? (
            <></>
          ) : (
            <input
              type="text"
              value={name}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{loginState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-extra">
          {loginState === "Sign In" ? (
            <p>
              New to NetFlix?{" "}
              <span
                onClick={() => {
                  setLoginState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <></>
          )}
          {loginState === "Sign In" ? (
            <></>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setLoginState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
