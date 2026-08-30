import { ArrowRight, Leaf } from "lucide-react";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import volunteer from "./assets/voluteer.jpg";
import plant from "./assets/plant.png";
import "./App.css";

function LandingPage({ onLogin, onRegister }) {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">
          <Leaf size={24} />
          <span>EcoTask</span>
        </div>

        <div className="nav-actions">
          <button className="nav-login" onClick={onLogin}>
            Log In
          </button>

          <button className="nav-signup" onClick={onRegister}>
            Sign Up
          </button>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-green">
          <div className="hero-content">
            <p className="eyebrow">Productivity with purpose</p>

            <h1>
              Making Every
              <br />
              Task Better for the
              <br />
              <span>Planet.</span>
            </h1>

            <p className="hero-description">
              Manage your tasks while making a positive impact on the
              environment. Stay productive, organized, and eco-friendly.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn" onClick={onRegister}>
                Get Started
                <ArrowRight size={18} />
              </button>

              <button className="secondary-btn">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={volunteer}
            alt="Volunteers helping the environment"
          />

          <img
            className="plant-image"
            src={plant}
            alt="Plant"
          />
        </div>
      </main>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("landing");

  if (page === "login") {
    return (
      <Login
        onBack={() => setPage("landing")}
        onRegister={() => setPage("register")}
      />
    );
  }

  if (page === "register") {
    return (
      <Register
        onBack={() => setPage("landing")}
        onLogin={() => setPage("login")}
      />
    );
  }

  return (
    <LandingPage
      onLogin={() => setPage("login")}
      onRegister={() => setPage("register")}
    />
  );
}

export default App;