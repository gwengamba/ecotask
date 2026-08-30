import { ArrowLeft, Leaf, Lock, Mail } from "lucide-react";
import "./App.css";

function Login({ onBack, onRegister }) {
  return (
    <div className="login-page">
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="login-card">
        <div className="login-logo">
          <Leaf size={25} />
          <span>EcoTask</span>
        </div>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Log in to continue managing your tasks.
        </p>

        <form>
          <label>Email</label>

          <div className="input-box">
            <Mail size={18} />
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <label>Password</label>

          <div className="input-box">
            <Lock size={18} />
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot">Forgot Password?</a>
          </div>

          <button type="button" className="login-submit">
            Log In
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
          <a
            href="#signup"
            onClick={(e) => {
              e.preventDefault();
              onRegister();
            }}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;