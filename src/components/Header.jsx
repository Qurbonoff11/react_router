import { BiLogoReact } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-800 shadow-lg flex items-center justify-around py-3 px-32 fixed top-o w-full ">
      <Link to="/">
        <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
          <BiLogoReact className="text-6xl text-blue-400" />
          <span className="font-semibold text-2xl">Blog</span>
        </span>
      </Link>

      <div className="flex items-center gap-5 text-black">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "py-1 px-3 text-lg rounded-xl font-light text-sky-300 bg-slate-700"
              : "py-1 px-3 text-lg rounded-xl font-light text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "py-1 px-3 text-lg rounded-xl font-light text-sky-300 bg-slate-700"
              : "py-1 px-3 text-lg rounded-xl font-light text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "py-1 px-3 text-lg rounded-xl font-light text-sky-300 bg-slate-700"
              : "py-1 px-3 text-lg rounded-xl font-light text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "py-1 px-3 text-lg rounded-xl font-light text-sky-300 bg-slate-700"
              : "py-1 px-3 text-lg rounded-xl font-light text-white hover:text-sky-300 hover:bg-slate-700 transition duration-300"
          }
        >
          Products
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
