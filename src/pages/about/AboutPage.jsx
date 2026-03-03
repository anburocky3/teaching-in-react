import { NavLink, Outlet } from "react-router";
import Header from "../../components/Header";

export default function AboutPage() {
  return (
    <div className="about-page">
      <title>About - MyApp</title>
      <Header />
      <div className="p-10 bg-orange-50 text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">
          This is the about page of our application. Here we will share our
          story and mission.
        </p>
        <ul className="flex items-center space-x-3 justify-center my-3">
          <li>
            <NavLink
              to="/about/team"
              className={
                "px-2 py-0.5 border border-orange-800 rounded text-sm text-orange-800 uppercase font-semibold hover:bg-orange-800 hover:text-white transition-colors"
              }
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about/mission"
              className={
                "px-2 py-0.5 border border-orange-800 rounded text-sm text-orange-800 uppercase font-semibold hover:bg-orange-800 hover:text-white transition-colors"
              }
            >
              Mission
            </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
