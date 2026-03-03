import RenderUsers from "../components/api/RenderUsers";
import Header from "../components/Header";

export default function UsersPage() {
  return (
    <div className="contact-page">
      <title>Users - MyApp</title>
      <Header />

      <section className="p-10 bg-orange-50">
        <h1 className="font-semibold text-2xl">Our Users</h1>
        <p className="text-sm text-gray-600">
          Here are the users of our application.
        </p>

        <div className="my-2">
          <RenderUsers />
        </div>
      </section>
    </div>
  );
}
