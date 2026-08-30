import {
  ArrowLeft,
  User,
  Mail,
  Lock,
  Leaf,
} from "lucide-react";
import "./App.css";

function Register({ onBack, onLogin }) {
  return (
    <div className="login-page">
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="login-card register-card">
        <div className="login-logo">
          <Leaf size={25} />
          <span>EcoTask</span>
        </div>

        <h1>Create Account</h1>

        <p className="login-subtitle">
          Create your account and start making every task count.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.target;

            if (!form.checkValidity()) {
              form.reportValidity();
              return;
            }

            onLogin();
          }}
        >
          <label>Full Name</label>

          <div className="input-box">
            <User size={18} />

            <input
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <label>Email</label>

          <div className="input-box">
            <Mail size={18} />

            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <label>Password</label>

          <div className="input-box">
            <Lock size={18} />

            <input
              type="password"
              placeholder="Create a password"
              required
            />
          </div>

          <label>Confirm Password</label>

          <div className="input-box">
            <Lock size={18} />

            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="login-submit"
          >
            Create Account
          </button>
        </form>

        <p className="signup-text">
          Already have an account?{" "}
          <a
            href="#login"
            onClick={(e) => {
              e.preventDefault();
              onLogin();
            }}
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;