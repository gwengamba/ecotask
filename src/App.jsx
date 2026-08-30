import { Leaf } from "lucide-react";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import volunteer from "./assets/voluteer.jpg";
import "./App.css";

function LandingPage({ onLogin, onRegister }) {
  return (
    <div className="landing-page">

      <main className="hero">

        {/* Background Image */}
        <div className="hero-image">
          <img
            src={volunteer}
            alt="Volunteers helping the environment"
          />
        </div>

        {/* Green Overlay */}
        <div className="hero-green">
          <div className="hero-content">

            <h1>
              Making Every
              <br />
              Task Better for the
              <br />
              Planet.
            </h1>

          </div>
        </div>

        {/* Navbar */}
        <nav className="navbar">

          <div className="logo">
            <Leaf size={20} />
            <span>EcoTask</span>
          </div>

          <div className="nav-actions">
            <button
              className="nav-login"
              onClick={onLogin}
            >
              Log In
            </button>

            <button
              className="nav-signup"
              onClick={onRegister}
            >
              Sign Up
            </button>
          </div>

        </nav>

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