import { Leaf } from "lucide-react";
import { useState } from "react";

import Login from "./Login";
import Register from "./Register";
import RoleSelection from "./RoleSelection";

import volunteer from "./assets/voluteer.jpg";

import "./App.css";


/* =========================================================
   LANDING PAGE
========================================================= */

function LandingPage({ onLogin, onRegister }) {
  return (
    <div className="landing-page">

      <main className="hero">

        {/* BACKGROUND IMAGE */}
        <div className="hero-image">
          <img
            src={volunteer}
            alt="Volunteers helping the environment"
          />
        </div>


        {/* GREEN SHAPE */}
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


        {/* NAVBAR */}
        <nav className="navbar">

          <div className="logo">

            <Leaf size={20} />

            <span>
              EcoTask
            </span>

          </div>


          <div className="nav-actions">

            <button
              className="nav-login"
              onClick={onLogin}
            >
              Login
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


/* =========================================================
   REGISTRATION SUBMITTED
========================================================= */

function RegistrationSubmitted({ onBack }) {
  return (
    <div className="success-overlay">

      <div className="success-card">

        {/* CHECK */}
        <div className="success-check">
          ✓
        </div>


        {/* TITLE */}
        <h2>
          Registration Submitted!
        </h2>


        {/* MESSAGE */}
        <p>
          Your organizer account has been successfully
          registered and is currently pending admin
          approval.
        </p>


        <p>
          You will be able to log in once an
          administrator approves your account.
        </p>


        {/* BACK TO FIRST PAGE */}
        <button
          className="success-back"
          onClick={onBack}
        >
          Back
        </button>

      </div>

    </div>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {

  const [page, setPage] = useState("landing");

  const [showRoleSelection, setShowRoleSelection] =
    useState(false);

  const [role, setRole] = useState(null);

  const [showSubmitted, setShowSubmitted] =
    useState(false);


  /* =======================================================
     LOGIN
  ======================================================= */

  if (page === "login") {

    return (
      <Login

        onBack={() => {
          setPage("landing");
        }}


        onRegister={() => {
          setPage("landing");
          setShowRoleSelection(true);
        }}

      />
    );
  }


  /* =======================================================
     REGISTER
  ======================================================= */

  if (page === "register") {

    return (
      <Register

        role={role}


        onBack={() => {
          setPage("landing");
          setShowRoleSelection(true);
        }}


        onLogin={() => {
          setPage("login");
        }}


        onOrganizerSubmitted={() => {

          setPage("landing");

          setShowSubmitted(true);

        }}

      />
    );
  }


  /* =======================================================
     LANDING
  ======================================================= */

  return (
    <>

      <LandingPage

        onLogin={() => {
          setPage("login");
        }}


        onRegister={() => {
          setShowRoleSelection(true);
        }}

      />


      {/* ROLE SELECTION */}

      {showRoleSelection && (

        <RoleSelection

          onClose={() => {
            setShowRoleSelection(false);
          }}


          onVolunteer={() => {

            setRole("volunteer");

            setShowRoleSelection(false);

            setPage("register");

          }}


          onOrganizer={() => {

            setRole("organizer");

            setShowRoleSelection(false);

            setPage("register");

          }}

        />

      )}


      {/* REGISTRATION SUBMITTED */}

      {showSubmitted && (

        <RegistrationSubmitted

          onBack={() => {

            /*
              BACK TO THE VERY FIRST SCREEN
            */

            setShowSubmitted(false);

            setShowRoleSelection(false);

            setRole(null);

            setPage("landing");

          }}

        />

      )}

    </>
  );
}


export default App;