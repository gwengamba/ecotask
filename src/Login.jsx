import {
  ArrowLeft,
  Eye,
  EyeOff,
  Leaf,
  Lock,
  Mail,
} from "lucide-react";

import { useState } from "react";
import volunteer from "./assets/voluteer.jpg";

function Login({ onBack, onRegister }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Login logic can be added here later
    console.log("Login submitted");
  };

  return (
    <div className="min-h-screen bg-[#315d42] flex items-center justify-center p-4">

      {/* MAIN LOGIN CONTAINER */}
      <div className="relative w-full max-w-[1200px] min-h-[670px] bg-white rounded-[28px] overflow-hidden shadow-2xl flex">

        {/* =====================================================
            LEFT SIDE
        ====================================================== */}
        <div className="relative hidden md:flex w-1/2 overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <img
            src={volunteer}
            alt="Volunteers helping the environment"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* GREEN OVERLAY */}
          <div className="absolute inset-0 bg-[#00a83b]/85"></div>

          {/* EXTRA DARK/GREEN OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#006b2d]/40 to-[#00a83b]/40"></div>

          {/* BACK BUTTON */}
          <button
            onClick={onBack}
            className="
              absolute
              top-6
              left-6
              z-20
              w-11
              h-11
              rounded-full
              bg-[#159447]
              hover:bg-[#117d3c]
              text-white
              flex
              items-center
              justify-center
              transition
            "
            aria-label="Back"
          >
            <ArrowLeft size={20} />
          </button>


          {/* LEFT CONTENT */}
          <div className="relative z-10 flex items-center w-full px-16">

            <div className="max-w-[430px] text-white">

              <h2 className="text-4xl font-medium tracking-wide mb-3">
                WELCOME
              </h2>

              <div className="flex items-center gap-2 mb-6">

                <div className="w-24 h-[1px] bg-white"></div>

                <span className="text-2xl font-light">
                  To EcoTask
                </span>

              </div>

              <p className="text-base leading-7 text-white/95">
                EcoTask is a platform that connects volunteers
                with meaningful environmental activities and
                community projects. Join us and make a positive
                impact on the planet.
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT SIDE
        ====================================================== */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-8 sm:px-12 lg:px-20 py-12">

          <div className="w-full max-w-[500px]">

            {/* MOBILE BACK BUTTON */}
            <button
              onClick={onBack}
              className="
                md:hidden
                mb-6
                w-10
                h-10
                rounded-full
                bg-[#159447]
                text-white
                flex
                items-center
                justify-center
              "
            >
              <ArrowLeft size={18} />
            </button>


            {/* LOGO */}
            <div className="flex items-center justify-center gap-2 mb-4">

              <Leaf
                size={25}
                className="text-[#20b84b]"
              />

              <span className="text-2xl font-bold text-[#245d39]">
                EcoTask
              </span>

            </div>


            {/* TITLE */}
            <h1 className="text-center text-4xl font-bold text-[#111827] mb-3">
              Welcome Back
            </h1>

            <p className="text-center text-gray-500 text-sm mb-10">
              Login to continue your journey with EcoTask.
            </p>


            {/* FORM */}
            <form onSubmit={handleSubmit}>

              {/* EMAIL */}
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email address
              </label>

              <div className="relative mb-5">

                <Mail
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  className="
                    w-full
                    h-14
                    pl-12
                    pr-4
                    border
                    border-gray-200
                    rounded-md
                    outline-none
                    text-gray-700
                    placeholder-gray-400
                    shadow-sm
                    focus:border-[#20b84b]
                    focus:ring-2
                    focus:ring-[#20b84b]/20
                    transition
                  "
                />

              </div>


              {/* PASSWORD */}
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>

              <div className="relative mb-4">

                <Lock
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="
                    w-full
                    h-14
                    pl-12
                    pr-12
                    border
                    border-gray-200
                    rounded-md
                    outline-none
                    text-gray-700
                    placeholder-gray-400
                    shadow-sm
                    focus:border-[#20b84b]
                    focus:ring-2
                    focus:ring-[#20b84b]/20
                    transition
                  "
                />


                {/* SHOW PASSWORD */}
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                    hover:text-gray-600
                  "
                  aria-label="Toggle password visibility"
                >

                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}

                </button>

              </div>


              {/* REMEMBER + FORGOT */}
              <div className="flex items-center justify-between mb-8">

                <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">

                  <input
                    type="checkbox"
                    className="
                      w-4
                      h-4
                      accent-[#20b84b]
                    "
                  />

                  Remember me

                </label>


                <button
                  type="button"
                  className="
                    text-sm
                    text-[#159447]
                    hover:text-[#0e7137]
                    font-medium
                  "
                >
                  Forgot Password?
                </button>

              </div>


              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="
                  w-full
                  h-14
                  bg-[#16b941]
                  hover:bg-[#12a83a]
                  text-white
                  font-semibold
                  rounded-md
                  transition
                  shadow-sm
                "
              >
                Login
              </button>

            </form>


            {/* SIGN UP */}
            <p className="text-center text-sm text-gray-500 mt-6">

              Don't have an account?{" "}

              <button
                type="button"
                onClick={onRegister}
                className="
                  text-[#159447]
                  font-semibold
                  hover:underline
                "
              >
                Sign Up
              </button>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;