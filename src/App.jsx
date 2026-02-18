import Header from "./components/Header";
import Footer from "./components/Footer";
import ListItem from "./components/BadgeItem";

function AppPage() {
  return (
    <>
      <Header />
      <div className="bg-orange-100 rounded text-black p-20">
        <h1 className="text-4xl text-center">Learning React!</h1>
        <ul className="flex items-center justify-center gap-5 mt-5">
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default AppPage;
