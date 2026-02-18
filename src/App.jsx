import Header from "./components/Header";
import Footer from "./components/Footer";
import BadgeItem from "./components/BadgeItem";

function AppPage() {
  return (
    <>
      <Header />
      <div className="bg-orange-100 rounded text-black p-20">
        <h1 className="text-4xl text-center">Learning React!</h1>
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

          {/* <BadgeItem skill="HTML" color="#0000FF" />
          <BadgeItem skill="CSS" color="#00FF00" />
          <BadgeItem skill="JavaScript" color="#FFFF00" />
          <BadgeItem skill="React" color="#800080" />
          <BadgeItem skill="PHP" color="#FFC0CB" /> */}
        </ul>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default AppPage;
