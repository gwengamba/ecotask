import {
  X,
  Leaf,
  UserRound,
  Megaphone,
} from "lucide-react";

function RoleSelection({
  onClose,
  onVolunteer,
  onOrganizer,
}) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/40
        px-4
      "
    >
      {/* ROLE CARD */}
      <div
        className="
          relative
          w-full
          max-w-[340px]
          rounded-[8px]
          bg-white
          px-[18px]
          py-[18px]
          shadow-[0_10px_35px_rgba(0,0,0,0.25)]
        "
      >

        {/* =================================================
            CLOSE BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-[10px]
            top-[10px]
            flex
            h-[25px]
            w-[25px]
            items-center
            justify-center
            rounded-full
            text-gray-500
            transition
            hover:bg-gray-100
            hover:text-gray-800
          "
        >
          <X size={17} />
        </button>


        {/* =================================================
            LOGO
        ================================================= */}

        <div
          className="
            mb-[5px]
            flex
            items-center
            justify-center
            gap-[5px]
            text-[16px]
            font-extrabold
            text-[#285d36]
          "
        >
          <Leaf
            size={18}
            strokeWidth={2.5}
            className="text-[#35a94b]"
          />

          <span>
            EcoTask
          </span>
        </div>


        {/* =================================================
            TITLE
        ================================================= */}

        <h2
          className="
            text-center
            text-[18px]
            font-extrabold
            leading-tight
            text-[#245d32]
          "
        >
          Welcome To EcoTask
        </h2>


        {/* SUBTITLE */}

        <p
          className="
            mt-[2px]
            text-center
            text-[8px]
            text-gray-500
          "
        >
          Connect and Create Greener Future
        </p>


        {/* =================================================
            VOLUNTEER OPTION
        ================================================= */}

        <button
          type="button"
          onClick={onVolunteer}
          className="
            mt-[15px]
            flex
            w-full
            items-center
            gap-[10px]
            rounded-[6px]
            border
            border-[#69bd58]
            bg-white
            px-[10px]
            py-[9px]
            text-left
            transition
            duration-200
            hover:bg-[#f4fbf2]
            hover:shadow-sm
            active:scale-[0.99]
          "
        >

          {/* ICON */}

          <div
            className="
              flex
              h-[30px]
              w-[30px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#edf8ec]
              text-[#348d43]
            "
          >
            <UserRound size={17} />
          </div>


          {/* TEXT */}

          <div className="flex flex-col">

            <strong
              className="
                text-[11px]
                font-bold
                leading-tight
                text-[#285d36]
              "
            >
              Join as a Volunteer
            </strong>

            <span
              className="
                mt-[2px]
                text-[8px]
                leading-tight
                text-gray-500
              "
            >
              Contribute your time and skills.
            </span>

          </div>

        </button>


        {/* =================================================
            OR DIVIDER
        ================================================= */}

        <div
          className="
            my-[10px]
            flex
            items-center
            gap-[8px]
          "
        >

          <div className="h-px flex-1 bg-gray-200" />

          <span
            className="
              text-[9px]
              text-gray-400
            "
          >
            or
          </span>

          <div className="h-px flex-1 bg-gray-200" />

        </div>


        {/* =================================================
            ORGANIZER OPTION
        ================================================= */}

        <button
          type="button"
          onClick={onOrganizer}
          className="
            flex
            w-full
            items-center
            gap-[10px]
            rounded-[6px]
            border
            border-[#9fc4f2]
            bg-white
            px-[10px]
            py-[9px]
            text-left
            transition
            duration-200
            hover:bg-[#f5f9ff]
            hover:shadow-sm
            active:scale-[0.99]
          "
        >

          {/* ICON */}

          <div
            className="
              flex
              h-[30px]
              w-[30px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#edf4ff]
              text-[#4d82d8]
            "
          >
            <Megaphone size={17} />
          </div>


          {/* TEXT */}

          <div className="flex flex-col">

            <strong
              className="
                text-[11px]
                font-bold
                leading-tight
                text-[#285d36]
              "
            >
              Register as an Organizer
            </strong>

            <span
              className="
                mt-[2px]
                text-[8px]
                leading-tight
                text-gray-500
              "
            >
              Lead and Manage Community Projects.
            </span>

          </div>

        </button>

      </div>
    </div>
  );
}

export default RoleSelection;