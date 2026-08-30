import { useState } from "react";
import "./App.css";
import {
  ArrowRight,
  Leaf,
  Sparkles
} from "lucide-react";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [page, setPage] = useState("home");

  if (page === "login") {
  return (
    <Login
      onBack={() => setPage("home")}
      onRegister={() => setPage("register")}
    />
  );
}

if (page === "register") {
  return (
    <Register
      onBack={() => setPage("home")}
      onLogin={() => setPage("login")}
    />
  );
}

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">
          <Leaf size={22} strokeWidth={2.5} />
          <span>EcoTask</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>

          <button 
            className="login-btn" 
            onClick={() => setPage("login")}>
            Log In
          </button>
        </div>
      </nav>

      <main className="hero" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={16} />
            <span>Productivity with purpose</span>
          </div>

          <h1>
            MAKING EVERY
            <br />
            TASK BETTER
            <br />
            <span>FOR THE PLANET.</span>
          </h1>

          <p className="hero-description">
            Manage your tasks while making a positive impact on the
            environment. Stay productive, organized, and eco-friendly.
          </p>

          <div className="hero-buttons">
            <button 
              className="primary-btn"
              onClick={() => setPage("login")}
            >
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow"></div>

          <div className="plant-card">
            <div className="plant">
              🌿
            </div>

            <div className="plant-text">
              <strong>Make Every Task Count</strong>
              <span>Small actions. Big impact.</span>
            </div>
          </div>
        </div>
      </main>

      <section className="features" id="features">
        <div>
          <span>01</span>
          <h3>Organize</h3>
          <p>Keep your everyday tasks in one place.</p>
        </div>

        <div>
          <span>02</span>
          <h3>Track</h3>
          <p>Monitor your progress and stay productive.</p>
        </div>

        <div>
          <span>03</span>
          <h3>Impact</h3>
          <p>Turn productivity into positive action.</p>
        </div>
      </section>
    </div>
  );
}

export default App;