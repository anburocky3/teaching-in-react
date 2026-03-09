import { NavLink } from "react-router";

export default function ExperimentIndexPage() {
  return (
    <ul className="list-disc list-inside mt-2">
      <li>
        <NavLink to="/experiments/usememo" className="text-blue-500 underline">
          UseMemo
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/experiments/usereducer"
          className="text-blue-500 underline"
        >
          UseReducer
        </NavLink>
      </li>
    </ul>
  );
}
