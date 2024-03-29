import { NavLink } from "react-router-dom";
const Navbar = () => {
  //   const { user, logOut } = useContext(AuthContext);
  //   const handleLogOut = () => {
  //     logOut()
  //       .then(() => {})
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  const links = (
    <div>
      <div className="">
        <nav className="flex flex-col md:flex-row lg:flex-row items-center justify-between font-poppins">
          <li className="tracking-[2px] text-md mr-0 lg:mr-10 font-medium text-[#1a4122]">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-800" : ""
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li className="tracking-[2px] text-md mr-0 lg:mr-10 font-medium text-[#1a4122]">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-800" : ""
              }
            >
              SERVICES
            </NavLink>
          </li>
          <li className="tracking-[2px] text-md mr-0 lg:mr-10 font-medium text-[#1a4122]">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-800" : ""
              }
            >
              EVENTS
            </NavLink>
          </li>
          <li className="text-3xl mx-0 lg:mx-28 font-medium text-[#1a4122]">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#1a4122]" : ""
              }
            >
              <p className="text-center">
                {" "}
                24 CARROTS
                <br />
                <span className="tracking-[2px] text-xs text-gray-400">
                  CATERING & EVENTS
                </span>
              </p>
            </NavLink>
          </li>
          <li className="tracking-[2px] text-md mr-0 lg:mr-10 font-medium text-[#1a4122]">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-800" : ""
              }
            >
              VENUE
            </NavLink>
          </li>
          <li className="tracking-[2px] text-md mr-0 lg:mr-10 font-medium text-[#1a4122]">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-800" : ""
              }
            >
              CAREER
            </NavLink>
          </li>
          <li className="text-md  font-medium text-[#1a4122]">
            <button className="tracking-[2px] px-4 py-1 text-white rounded-full bg-[#C15627]">
              GET IN TOUCH
            </button>
          </li>
        </nav>
      </div>
    </div>
  );
  return (
    <div>
      <div>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <div className="w-[100px]"></div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal py-1">{links}</ul>
          </div>
          <div className="navbar-end text-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
