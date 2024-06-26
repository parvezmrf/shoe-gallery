import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogut = async ()=>{
    await logout()
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              {!user && (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            {user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Shoe Gallery</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="btn btn-outline btn-success mx-1">
              <Link to={"/"}>Home</Link>
            </li>
            {!user && (
                <>
                  <li className="btn btn-outline btn-success mx-1">
                    <Link to="/login">Loginn</Link>
                  </li>
                  <li className="btn btn-outline btn-success mx-1">
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            {user && (
              <li className="btn btn-outline btn-success mx-1">
                <Link to="/dashboard">Dashboard</Link>
                
              </li>

              
            )}
          
          </ul>
        </div>
        <div className="navbar-end">
          {user && (

            <a onClick={handleLogut} className="btn">Logout</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
