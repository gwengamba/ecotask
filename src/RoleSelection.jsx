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
    <div className="role-overlay">

      <div className="role-card">

        {/* CLOSE */}

        <button
          className="role-close"
          onClick={onClose}
        >
          <X size={18} />
        </button>


        {/* LOGO */}

        <div className="role-logo">
          <Leaf size={18} />
          <span>EcoTask</span>
        </div>


        {/* TITLE */}

        <h2>
          Welcome To EcoTask
        </h2>

        <p className="role-subtitle">
          Connect and Create Greener Future
        </p>


        {/* VOLUNTEER */}

        <button
          className="role-option volunteer-option"
          onClick={onVolunteer}
        >

          <div className="role-icon volunteer-icon">
            <UserRound size={18} />
          </div>

          <div className="role-content">

            <strong>
              Join as a Volunteer
            </strong>

            <span>
              Contribute your time and skills.
            </span>

          </div>

        </button>


        {/* OR */}

        <div className="role-or">
          <span>or</span>
        </div>


        {/* ORGANIZER */}

        <button
          className="role-option organizer-option"
          onClick={onOrganizer}
        >

          <div className="role-icon organizer-icon">
            <Megaphone size={18} />
          </div>

          <div className="role-content">

            <strong>
              Register as an Organizer
            </strong>

            <span>
              Lead and Manage Community Projects.
            </span>

          </div>

        </button>

      </div>

    </div>
  );
}

export default RoleSelection;