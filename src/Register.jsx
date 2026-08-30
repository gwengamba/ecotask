import {
  ArrowLeft,
  User,
  Mail,
  Lock,
  Leaf,
} from "lucide-react";
import "./App.css";
import volunteer from "./assets/voluteer.jpg";

function Register({ onBack, onLogin }) {
  return (
    <div className="register-page">

      <div className="register-background">
        <img
          src={volunteer}
          alt="Volunteers helping the environment"
        />

        <div className="register-image-overlay"></div>

        <div className="register-green-shape"></div>
      </div>

      <button
        className="register-back"
        onClick={onBack}
      >
        <ArrowLeft size={18} />
      </button>

      <div className="register-card">

        <div className="register-logo">
          <Leaf size={20} />
          <span>EcoTask</span>
        </div>

        <h1>Create Account</h1>

        <p className="register-subtitle">
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

          <div className="register-input">
            <User size={17} />

            <input
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>


          <label>Email</label>

          <div className="register-input">
            <Mail size={17} />

            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>


          <label>Password</label>

          <div className="register-input">
            <Lock size={17} />

            <input
              type="password"
              placeholder="Create a password"
              required
            />
          </div>


          <label>Confirm Password</label>

          <div className="register-input">
            <Lock size={17} />

            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>


          <button
            type="submit"
            className="register-submit"
          >
            Create Account
          </button>

        </form>

        <p className="register-login">
          Already have an account?{" "}

          <button
            type="button"
            onClick={onLogin}
          >
            Log In
          </button>
        </p>

      </div>
    </div>
  );
}

export default Register;