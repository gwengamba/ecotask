import { Leaf, Check } from "lucide-react";
import { useState } from "react";

import Login from "./Login";
import Register from "./Register";

import volunteer from "./assets/voluteer.jpg";


/* =========================================================
   LANDING PAGE
========================================================= */

function LandingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen w-full bg-[#00140d] text-white">

      <main className="relative min-h-screen overflow-hidden">

        {/* =================================================
            BACKGROUND IMAGE
        ================================================= */}

        <div className="absolute inset-0">

          <img
            src={volunteer}
            alt="Volunteers helping the environment"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

        </div>


        {/* =================================================
            DARK GREEN OVERLAY
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#00150d]
            via-[#002417]/90
            to-[#002416]/65
          "
        />


        {/* =================================================
            EXTRA DARK OVERLAY
            FOR READABLE TEXT
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            bg-black/25
          "
        />


        {/* =================================================
            NAVBAR
        ================================================= */}

        <nav
          className="
            relative
            z-30
            flex
            h-20
            items-center
            px-8
            md:px-12
            lg:px-20
          "
        >

          {/* LOGO */}

          <div
            className="
              flex
              items-center
              gap-2
              text-2xl
              font-bold
            "
          >

            <Leaf
              size={24}
              strokeWidth={2}
              className="text-green-400"
            />

            <span>
              EcoTask
            </span>

          </div>

        </nav>


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <section
          className="
            relative
            z-20
            flex
            min-h-[calc(100vh-80px)]
            items-center
            px-8
            md:px-12
            lg:px-20
          "
        >

          <div
            className="
              w-full
              max-w-3xl
              pb-20
            "
          >

            {/* SMALL TITLE */}

            <p
              className="
                mb-5
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-green-400
                md:text-sm
              "
            >
              Welcome to EcoTask
            </p>


            {/* MAIN TITLE */}

            <h1
              className="
                max-w-3xl
                text-5xl
                font-extrabold
                leading-[1.05]
                tracking-tight
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >

              Making Every Task

              <br />

              <span className="text-green-400">
                Better for the Planet.
              </span>

            </h1>


            {/* DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-7
                text-white/85
                md:text-lg
              "
            >
              Manage your tasks, stay organized, and make a
              positive impact on the environment.
            </p>


            {/* GET STARTED */}

            <button
              onClick={onGetStarted}
              className="
                mt-9
                rounded-lg
                bg-green-500
                px-8
                py-4
                text-sm
                font-bold
                text-black
                shadow-lg
                shadow-green-900/30
                transition
                duration-200
                hover:bg-green-400
                hover:shadow-green-500/20
                active:scale-95
              "
            >
              Get Started
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}


/* =========================================================
   REGISTRATION SUBMITTED
========================================================= */

function RegistrationSubmitted({ onBack }) {
  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black
      "
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0">

        <img
          src={volunteer}
          alt="Volunteers helping the environment"
          className="
            h-full
            w-full
            object-cover
          "
        />

      </div>


      {/* GREEN/DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#00150d]/95
          via-[#00351f]/80
          to-[#002417]/60
        "
      />


      {/* LEFT SIDE TITLE */}

      <div
        className="
          absolute
          left-8
          top-1/2
          z-10
          hidden
          -translate-y-1/2
          md:left-12
          md:block
          lg:left-20
        "
      >

        <h1
          className="
            text-5xl
            font-extrabold
            leading-[1.05]
            text-white
            md:text-6xl
            lg:text-7xl
          "
        >

          Making Every Task

          <br />

          <span className="text-green-400">
            Better for the Planet.
          </span>

        </h1>

      </div>


      {/* SUCCESS CARD */}

      <div
        className="
          relative
          z-20
          mx-6
          w-full
          max-w-md
          rounded-xl
          bg-white
          px-8
          py-9
          text-center
          shadow-2xl
        "
      >

        {/* CHECK */}

        <div
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border-2
            border-green-500
          "
        >

          <Check
            size={34}
            strokeWidth={2}
            className="text-green-500"
          />

        </div>


        {/* TITLE */}

        <h2
          className="
            mt-5
            text-2xl
            font-bold
            text-[#215b36]
          "
        >
          Registration Submitted!
        </h2>


        {/* MESSAGE */}

        <p
          className="
            mt-4
            text-sm
            leading-6
            text-gray-700
          "
        >
          Your volunteer account has been successfully
          registered.
        </p>


        <p
          className="
            mt-3
            text-sm
            leading-6
            text-gray-700
          "
        >
          You can now log in to your EcoTask account.
        </p>


        {/* BACK */}

        <button
          onClick={onBack}
          className="
            mt-7
            w-full
            rounded-lg
            bg-green-500
            px-6
            py-3
            text-sm
            font-bold
            text-black
            transition
            hover:bg-green-400
            active:scale-95
          "
        >
          Back to Home
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

  const [showSubmitted, setShowSubmitted] =
    useState(false);


  /* =======================================================
     LOGIN PAGE
  ======================================================= */

  if (page === "login") {

    return (
      <Login

        onBack={() => {
          setPage("landing");
        }}

        onRegister={() => {
          setPage("register");
        }}

      />
    );
  }


  /* =======================================================
     REGISTER PAGE
  ======================================================= */

  if (page === "register") {

    return (
      <Register

        /* Volunteer only */

        role="volunteer"


        /* BACK */

        onBack={() => {
          setPage("landing");
        }}


        /* LOGIN */

        onLogin={() => {
          setPage("login");
        }}


        /* REGISTRATION SUCCESS */

        onOrganizerSubmitted={() => {

          setPage("landing");

          setShowSubmitted(true);

        }}

      />
    );
  }


  /* =======================================================
     LANDING PAGE
  ======================================================= */

  return (
    <>

      <LandingPage

        onGetStarted={() => {
          setPage("register");
        }}

      />


      {/* =================================================
          REGISTRATION SUBMITTED
      ================================================= */}

      {showSubmitted && (

        <RegistrationSubmitted

          onBack={() => {

            setShowSubmitted(false);

            setPage("landing");

          }}

        />

      )}

    </>
  );
}


export default App;