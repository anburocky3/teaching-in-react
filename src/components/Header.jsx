import { useContext } from "react";
import { NavLink } from "react-router";
import { AppContext } from "../context/MyContext";

const Header = () => {
  const { appName } = useContext(AppContext);

  return (
    <header className="bg-zinc-950 text-white  p-4  sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <NavLink to="/">
          <h4 className="font-semibold text-orange-600">{appName}</h4>
        </NavLink>
        <ul className="flex items-center space-x-10 text-sm">
          <li>
            <NavLink to="/" className="hover:text-orange-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-orange-300">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/experiments" className="hover:text-orange-300">
              Experiments
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className="hover:text-orange-300">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="hover:text-orange-300">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-orange-300">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
