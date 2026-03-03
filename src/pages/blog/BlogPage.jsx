import { Outlet } from "react-router";
import Header from "../../components/Header";
import LearningForms from "../../components/ui/LearningForms";

export default function BlogPage() {
  return (
    <div className="blog-page">
      <title>Blog - MyApp</title>
      <Header />

      <section className="p-10 bg-orange-50 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Blog Page</h1>
        <p className="text-gray-700">
          This is where we will share our latest news and articles.
        </p>

        {/* Forms in react */}
        <div className="my-3 max-w-xl mx-auto">{/* <LearningForms /> */}</div>
      </section>

      <section>
        <Outlet />
      </section>
    </div>
  );
}
