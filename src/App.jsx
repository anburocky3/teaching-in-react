import Header from "./components/Header";
import BadgeItem from "./components/BadgeItem";
import { useState } from "react";

function AppPage() {
  const [userName, setUserName] = useState("Ajith");

  return (
    <>
      <Header user={userName} />
      <div className="bg-orange-100 rounded text-black p-20">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Hello {userName}!</h1>
          <select
            className="border border-gray-300 rounded p-2 mt-4"
            onChange={(event) => setUserName(event.target.value)}
          >
            <option value="Ajith">Ajith</option>
            <option value="Anbu">Anbu</option>
            <option value="Arun">Arun</option>
            <option value="Aishwarya">Aishwarya</option>
          </select>
          <p>
            After completing the React course, you are now ready to build
            amazing applications!
          </p>
        </div>
        <ul className="flex items-center justify-center gap-5 mt-5">
          <BadgeItem skill="HTML" color="blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="w-4"
            >
              <path
                fill="currentColor"
                d="M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m5 3.2q1.25 0 2.125-.875T15 11V5H9v6q0 1.25.875 2.125T12 14m5-3.2q.9-.325 1.45-1.088T19 8V7h-2zm-5-1.3"
              />
            </svg>
          </BadgeItem>
          <BadgeItem skill="CSS" color="green" />
          <BadgeItem skill="JavaScript" color="yellow" />
          <BadgeItem skill="React" color="purple" />
        </ul>
      </div>
    </>
  );
}

export default AppPage;
