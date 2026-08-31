import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Lock,
  Leaf,
  Eye,
  EyeOff,
  Building2,
} from "lucide-react";

import { useState } from "react";

import "./App.css";

import volunteer from "./assets/voluteer.jpg";


function Register({
  onBack,
  onLogin,
  role,
  onOrganizerSubmitted,
}) {

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);


  const isOrganizer = role === "organizer";


  /* =========================
     SUBMIT FORM
  ========================= */

  function handleSubmit(e) {

    e.preventDefault();

    const form = e.target;


    // Check required fields

    if (!form.checkValidity()) {

      form.reportValidity();

      return;
    }


    // ORGANIZER

    if (isOrganizer) {

      onOrganizerSubmitted();

      return;
    }


    // VOLUNTEER

    onLogin();
  }


  return (

    <div className="register-page">


      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="register-background">

        <img
          src={volunteer}
          alt="Volunteers helping the environment"
        />

        <div className="register-image-overlay"></div>

        <div className="register-green-shape"></div>

      </div>


      {/* =========================
          BACK BUTTON
      ========================= */}

      <button
        className="register-back"
        onClick={onBack}
      >
        <ArrowLeft size={18} />
      </button>


      {/* =========================
          REGISTER CARD
      ========================= */}

      <div
        className={`register-card ${
          isOrganizer
            ? "organizer-register-card"
            : ""
        }`}
      >


        {/* LOGO */}

        <div className="register-logo">

          <Leaf size={20} />

          <span>EcoTask</span>

        </div>


        {/* TITLE */}

        <h1>
          Welcome To EcoTask
        </h1>

        <p className="register-subtitle">
          Connect and Create Greener Future
        </p>


        {/* =========================
            FORM
        ========================= */}

        <form onSubmit={handleSubmit}>


          {/* =========================
              ORGANIZER FIELDS
          ========================= */}

          {isOrganizer && (
            <>


              {/* ORGANIZATION NAME */}

              <label>
                Organization Name
              </label>

              <div className="register-input">

                <Building2 size={15} />

                <input
                  type="text"
                  placeholder="Organization Name"
                  required
                />

              </div>


              {/* ORGANIZER NAME */}

              <label>
                Organizer Name
              </label>

              <div className="register-input">

                <User size={15} />

                <input
                  type="text"
                  placeholder="Organizer Name"
                  required
                />

              </div>

            </>
          )}


          {/* =========================
              VOLUNTEER NAME
          ========================= */}

          {!isOrganizer && (
            <>

              <label>
                Full Name
              </label>

              <div className="register-input">

                <User size={15} />

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                />

              </div>

            </>
          )}


          {/* =========================
              EMAIL
          ========================= */}

          <label>
            Email
          </label>

          <div className="register-input">

            <Mail size={15} />

            <input
              type="email"
              placeholder="Email"
              required
            />

          </div>


          {/* =========================
              CONTACT
          ========================= */}

          <label>
            Contact No.
          </label>

          <div className="register-input">

            <Phone size={15} />

            <input
              type="tel"
              placeholder="Contact No."
              required
            />

          </div>


          {/* =========================
              PASSWORD
          ========================= */}

          <label>
            Password
          </label>

          <div className="register-input">

            <Lock size={15} />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >

              {showPassword ? (
                <EyeOff size={14} />
              ) : (
                <Eye size={14} />
              )}

            </button>

          </div>


          {/* =========================
              CONFIRM PASSWORD
          ========================= */}

          <label>
            Confirm Password
          </label>

          <div className="register-input">

            <Lock size={15} />

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm Password"
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >

              {showConfirmPassword ? (
                <EyeOff size={14} />
              ) : (
                <Eye size={14} />
              )}

            </button>

          </div>


          {/* =========================
              SUBMIT BUTTON
          ========================= */}

          <button
            type="submit"
            className="register-submit"
          >

            {isOrganizer
              ? "Request Approval"
              : "Sign Up"}

          </button>


          {/* =========================
              ORGANIZER MESSAGE
          ========================= */}

          {isOrganizer && (
            <p className="approval-note">

              Your account will be reviewed by an admin.
              You can access EcoTask after approval.

            </p>
          )}


          {/* =========================
              GOOGLE - VOLUNTEER ONLY
          ========================= */}

          {!isOrganizer && (
            <>

              <div className="register-divider">

                <span>or</span>

              </div>


              <button
                type="button"
                className="google-register"
              >

                <span className="google-icon">
                  G
                </span>

                Continue with Google

              </button>

            </>
          )}

        </form>


        {/* =========================
            LOGIN
        ========================= */}

        <p className="register-login">

          Already have an Account?{" "}

          <button
            type="button"
            onClick={onLogin}
          >
            Login
          </button>

        </p>


      </div>

    </div>
  );
}


export default Register;