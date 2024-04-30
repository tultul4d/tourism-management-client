import { Link, NavLink } from "react-router-dom";
import { IoTrailSign } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(() => console.log("logout "))
        .catch(error => console.error(error))
    } 
    const navLinks = <>
    <li><NavLink to="/home" className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-teal-200 border-b-4 border-teal-200"
                    : "hover:text-teal-200"
                }>Home </NavLink></li>
    <li><NavLink to="/stops" className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-teal-200 border-b-4 border-teal-200"
                    : "hover:text-teal-200"
                }>All Tourists Spot </NavLink></li>
    <li><NavLink to="/add" className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-teal-200 border-b-4 border-teal-200"
                    : "hover:text-teal-200"
                }>Add Tourists Spot </NavLink></li>
    <li><NavLink to="/list" className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-teal-200 border-b-4 border-teal-200"
                    : "hover:text-teal-200"
                }>My List </NavLink></li>
                {/* <li><NavLink to="/login" className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-teal-200 border-b-4 border-teal-200"
                    : "hover:text-teal-200"
                }>Login </NavLink></li>

<li><NavLink to="/register" className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-teal-200 border-b-4 border-teal-200"
                    : "hover:text-teal-200"
                }>Register </NavLink></li> */}
    </>
    return (
        <div className="navbar rounded-lg  bg-zinc-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-slate-900 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">TrekTrax</a>
          <IoTrailSign />
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
            {
                user ? <>
                <span>{user.email}</span>
                <a onClick={handleLogOut} className="btn">LogOut</a>
                </>  : <Link to="/login">
                <button onClick={handleLogOut} className="btn">Login</button>
                   </Link>
            }
          
        </div>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      </div>
    );
};

export default Navbar;