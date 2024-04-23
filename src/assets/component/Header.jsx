import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    // <div>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/hero">Hero Register</NavLink>
    //     <NavLink to="/login">Login</NavLink>
    //     <NavLink to="/register">Register</NavLink>
    // </div>
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-bold">
          <NavLink  className="ml-4"  to="/">Home</NavLink>
          <NavLink  className="ml-4" to="/hero">Hero Register</NavLink>
          <NavLink  className="ml-4" to="/login">Login</NavLink>
          <NavLink  className="ml-4" to="/register">Register</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
