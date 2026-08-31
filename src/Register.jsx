import {
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  User,
  Leaf,
} from "lucide-react";

import { useState } from "react";
import volunteer from "./assets/voluteer.jpg";

function Register({ onBack, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    onLogin();
  };

  return (
    <div className="min-h-screen w-full bg-[#31583d] p-3 sm:p-4 lg:p-5 flex items-center justify-center">

      {/* MAIN CARD */}
      <div
        className="
          relative
          flex
          h-[calc(100vh-24px)]
          max-h-[700px]
          w-full
          max-w-[1200px]
          overflow-hidden
          rounded-[26px]
          bg-white
          shadow-2xl
          sm:h-[calc(100vh-32px)]
        "
      >

        {/* BACK BUTTON */}
        <button
          type="button"
          onClick={onBack}
          className="
            absolute
            left-5
            top-5
            z-30
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-black/20
            text-white
            backdrop-blur-sm
            transition
            hover:bg-black/30
            active:scale-95
          "
        >
          <ArrowLeft size={18} strokeWidth={2} />
        </button>


        {/* =====================================================
            LEFT SIDE
        ===================================================== */}
        <div className="relative hidden w-1/2 overflow-hidden lg:block">

          {/* IMAGE */}
          <img
            src={volunteer}
            alt="Volunteers helping the environment"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* GREEN OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#075f2b]/90
              via-[#07933d]/80
              to-[#19c94a]/65
            "
          />

          {/* LEFT CONTENT */}
          <div
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-end
              px-12
              pb-24
              text-white
              xl:px-16
            "
          >
            <h2
              className="
                text-[26px]
                font-semibold
                tracking-tight
                text-black
              "
            >
              WELCOME
            </h2>

            <div className="mt-2 flex items-center">
              <div className="h-px w-[100px] bg-white/90" />

              <span className="ml-2 text-[17px] font-light">
                To EcoTask
              </span>
            </div>

            <p
              className="
                mt-5
                max-w-[400px]
                text-[12px]
                leading-[1.7]
                text-white/95
              "
            >
              EcoTask is a platform that connects volunteers
              with meaningful environmental activities and
              community projects. Join us and make a positive
              impact on the planet.
            </p>
          </div>
        </div>


        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            justify-center
            bg-white
            px-7
            py-8
            sm:px-12
            lg:w-1/2
            lg:px-14
            xl:px-16
          "
        >

          {/* LOGO */}
          <div className="mb-5 flex items-center justify-center gap-2">
            <Leaf
              size={22}
              strokeWidth={2}
              className="text-[#20b83f]"
            />

            <span
              className="
                text-[20px]
                font-bold
                tracking-tight
                text-[#23482b]
              "
            >
              EcoTask
            </span>
          </div>


          {/* TITLE */}
          <div className="text-center">

            <h1
              className="
                mx-auto
                max-w-[400px]
                text-[40px]
                font-medium
                leading-[1.05]
                tracking-[-1.8px]
                text-[#111111]
                sm:text-[42px]
              "
            >
              Register to
              <br />
              Volunteer
            </h1>

            <p
              className="
                mx-auto
                mt-4
                max-w-[380px]
                text-[12px]
                leading-[1.6]
                text-[#7b8580]
              "
            >
              Fill up the form to get onboard as one of
              our volunteers at EcoTask.
            </p>

          </div>


          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              mx-auto
              mt-6
              w-full
              max-w-[430px]
            "
          >

            {/* FULL NAME */}
            <div className="mb-3">

              <label
                htmlFor="fullName"
                className="sr-only"
              >
                Full Name
              </label>

              <div
                className="
                  flex
                  h-[49px]
                  items-center
                  gap-3
                  rounded-md
                  border
                  border-[#dfe3e0]
                  bg-white
                  px-4
                  shadow-sm
                  transition
                  focus-within:border-[#20b83f]
                  focus-within:ring-2
                  focus-within:ring-[#20b83f]/10
                "
              >
                <User
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#9aa5a0]"
                />

                <input
                  id="fullName"
                  type="text"
                  placeholder="Full name"
                  required
                  className="
                    h-full
                    w-full
                    border-none
                    bg-transparent
                    text-[13px]
                    text-gray-700
                    outline-none
                    placeholder:text-[#a2aaa6]
                  "
                />
              </div>
            </div>


            {/* EMAIL */}
            <div className="mb-3">

              <label
                htmlFor="email"
                className="sr-only"
              >
                Email Address
              </label>

              <div
                className="
                  flex
                  h-[49px]
                  items-center
                  gap-3
                  rounded-md
                  border
                  border-[#dfe3e0]
                  bg-white
                  px-4
                  shadow-sm
                  transition
                  focus-within:border-[#20b83f]
                  focus-within:ring-2
                  focus-within:ring-[#20b83f]/10
                "
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#9aa5a0]"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  required
                  className="
                    h-full
                    w-full
                    border-none
                    bg-transparent
                    text-[13px]
                    text-gray-700
                    outline-none
                    placeholder:text-[#a2aaa6]
                  "
                />
              </div>
            </div>


            {/* PHONE */}
            <div className="mb-3">

              <label
                htmlFor="phone"
                className="sr-only"
              >
                Phone Number
              </label>

              <div
                className="
                  flex
                  h-[49px]
                  items-center
                  gap-3
                  rounded-md
                  border
                  border-[#dfe3e0]
                  bg-white
                  px-4
                  shadow-sm
                  transition
                  focus-within:border-[#20b83f]
                  focus-within:ring-2
                  focus-within:ring-[#20b83f]/10
                "
              >
                <Phone
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#9aa5a0]"
                />

                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="
                    h-full
                    w-full
                    border-none
                    bg-transparent
                    text-[13px]
                    text-gray-700
                    outline-none
                    placeholder:text-[#a2aaa6]
                  "
                />
              </div>
            </div>


            {/* PASSWORD */}
            <div className="mb-3">

              <label
                htmlFor="password"
                className="sr-only"
              >
                Password
              </label>

              <div
                className="
                  flex
                  h-[49px]
                  items-center
                  gap-3
                  rounded-md
                  border
                  border-[#dfe3e0]
                  bg-white
                  px-4
                  shadow-sm
                  transition
                  focus-within:border-[#20b83f]
                  focus-within:ring-2
                  focus-within:ring-[#20b83f]/10
                "
              >
                <Lock
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#9aa5a0]"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="
                    h-full
                    w-full
                    border-none
                    bg-transparent
                    text-[13px]
                    text-gray-700
                    outline-none
                    placeholder:text-[#a2aaa6]
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="
                    shrink-0
                    text-[#9aa5a0]
                    transition
                    hover:text-[#4f5b53]
                  "
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>


            {/* CONFIRM PASSWORD */}
            <div className="mb-5">

              <label
                htmlFor="confirmPassword"
                className="sr-only"
              >
                Confirm Password
              </label>

              <div
                className="
                  flex
                  h-[49px]
                  items-center
                  gap-3
                  rounded-md
                  border
                  border-[#dfe3e0]
                  bg-white
                  px-4
                  shadow-sm
                  transition
                  focus-within:border-[#20b83f]
                  focus-within:ring-2
                  focus-within:ring-[#20b83f]/10
                "
              >
                <Lock
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#9aa5a0]"
                />

                <input
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm password"
                  required
                  className="
                    h-full
                    w-full
                    border-none
                    bg-transparent
                    text-[13px]
                    text-gray-700
                    outline-none
                    placeholder:text-[#a2aaa6]
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="
                    shrink-0
                    text-[#9aa5a0]
                    transition
                    hover:text-[#4f5b53]
                  "
                >
                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>


            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="
                h-[49px]
                w-full
                rounded-md
                bg-[#16b83b]
                text-[13px]
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-[#12a834]
                active:scale-[0.99]
              "
            >
              Register
            </button>

          </form>


          {/* LOGIN */}
          <p
            className="
              mt-3
              text-center
              text-[11px]
              text-[#8a938c]
            "
          >
            Already have an account?{" "}

            <button
              type="button"
              onClick={onLogin}
              className="
                font-semibold
                text-[#159b35]
                hover:underline
              "
            >
              Login
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;