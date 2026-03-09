import Headers from "../../components/Header";
import Footer from "../../components/Footer";
import { NavLink, Outlet } from "react-router";

export default function ExperimentPage() {
  return (
    <>
      <title>MyApp - Experiment</title>
      <Headers />
      <div className="min-h-screen bg-green-100 p-5">
        <div className="text-lg font-semibold p-5  bg-green-200 text-green-600 rounded">
          <span className="uppercase">Experimenting React Concepts!</span>
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
