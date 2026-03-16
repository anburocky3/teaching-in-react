import { Link } from "react-router";
import Header from "../../components/Header";
import supabase from "../../utils/supabase";

export default function InternsCreate() {
  const createIntern = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // write validation
    if (!formData.get("name")) {
      alert("Please enter a name for the intern.");
      return;
    }
    if (!formData.get("age")) {
      alert("Please enter an age for the intern.");
      return;
    }
    if (!formData.get("gender")) {
      alert("Please select a gender for the intern.");
      return;
    }

    const internData = {
      name: formData.get("name"),
      age: formData.get("age"),
      gender: formData.get("gender"),
    };

    const { error } = await supabase.from("teams").insert(internData);

    if (error) {
      console.error("Error creating intern:", error);
      alert("Failed to create intern. Please try again.");
    } else {
      alert("Intern created successfully!");
      // Optionally, you can redirect back to the interns list page
      // window.location.href = "/users";
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <title>Interns - MyApp</title>
      <Header />

      <section className="p-10 bg-orange-50">
        <Link to={"/users"} className="text-blue-500 hover:underline">
          &larr; Back to Interns List
        </Link>
        <h1 className="font-semibold text-2xl">Add new intern</h1>
        <p className="text-sm text-gray-600">
          This page will have a form to add a new intern to the system.
        </p>
      </section>

      <div className="m-5 bg-white p-5 rounded shadow max-w-xl mx-auto">
        {/* create form here for interns */}
        <form className="mt-5" onSubmit={createIntern}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              placeholder="Full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-medium">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              placeholder="Age"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 font-medium">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full"
          >
            Add Intern
          </button>
        </form>
      </div>
    </div>
  );
}
