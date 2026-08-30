import {
  ArrowLeft,
  Eye,
  EyeOff,
  Leaf,
  Lock,
  Mail,
  X,
} from "lucide-react";
import { useState } from "react";
import volunteer from "./assets/voluteer.jpg";

function Login({ onBack, onRegister }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page">

      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="login-background">

        <img
          src={volunteer}
          alt="Volunteers helping the environment"
        />

        <div className="login-image-overlay"></div>

        <div className="login-green-shape"></div>

      </div>


      {/* =========================
          BACK BUTTON
      ========================= */}

      <button
        className="login-back"
        onClick={onBack}
        aria-label="Back"
      >
        <ArrowLeft size={18} />
      </button>


      {/* =========================
          LOGIN CARD
      ========================= */}

      <div className="login-card">

        {/* Close */}

        <button
          className="login-close"
          onClick={onBack}
          aria-label="Close"
        >
          <X size={16} />
        </button>


        {/* Logo */}

        <div className="login-logo">
          <Leaf size={20} />
          <span>EcoTask</span>
        </div>


        {/* Heading */}

        <h1>
          Welcome Back to EcoTask
        </h1>

        <p className="login-subtitle">
          Connect and Create Greener Future
        </p>


        {/* Form */}

        <form onSubmit={handleSubmit}>

          {/* Email */}

          <label htmlFor="email">
            Email
          </label>

          <div className="input-box">

            <Mail size={17} />

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />

          </div>


          {/* Password */}

          <label htmlFor="password">
            Password
          </label>

          <div className="input-box">

            <Lock size={17} />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              aria-label="Show password"
            >
              {showPassword ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )}
            </button>

          </div>


          {/* Forgot Password */}

          <div className="login-options">

            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              className="forgot-password"
            >
              Forgot Password?
            </button>

          </div>


          {/* Login */}

          <button
            type="submit"
            className="login-submit"
          >
            Login
          </button>


          {/* OR */}

          <div className="login-divider">
            <span>or</span>
          </div>


          {/* Google */}

          <button
            type="button"
            className="google-login"
          >
            <span className="google-icon">G</span>
            Continue with Google
          </button>

        </form>


        {/* Register */}

        <p className="signup-text">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onRegister}
          >
            Sign Up
          </button>
        </p>

      </div>

    </div>
  );
}

export default Login;