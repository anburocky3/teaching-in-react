import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";
import { Link } from "react-router";

export default function InternsPage() {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    async function getInterns() {
      const { data } = await supabase.from("teams").select();
      console.log("Interns data:", data);
      setInterns(data);
    }

    getInterns();
  }, []);

  async function deleteIntern(id) {
    if (window.confirm("Are you sure you want to delete this intern?")) {
      // If they confirm yes, it should delete the intern with the given id from the database
      const { error } = await supabase.from("teams").delete().eq("id", id);
      if (error) {
        console.error("Error deleting intern:", error);
        alert("Failed to delete intern. Please try again.");
      } else {
        // Remove the deleted intern from the UI
        setInterns(interns.filter((intern) => intern.id !== id));
      }
    }
  }

  return (
    <div className="m-10 p-5 bg-blue-50 rounded">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg">Our Interns</h4>
        <Link
          to={"/users/create"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Add Intern
        </Link>
      </div>
      <table className="table border-collapse border border-gray-300 w-full mt-4">
        <thead>
          <tr className="bg-blue-100 border">
            <th className="border border-gray-300 p-2 w-10">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Gender</th>
            <th className="border border-gray-300 p-2">Age</th>
            <th className="border border-gray-300 p-2 w-48">Actions</th>
          </tr>
        </thead>
        <tbody>
          {interns.length > 0 ? (
            interns.map((intern) => (
              <tr key={intern.id}>
                <td className="border border-gray-300 p-2">{intern.id}</td>
                <td className="border border-gray-300 p-2">{intern.name}</td>
                <td className="border border-gray-300 p-2">{intern.gender}</td>
                <td className="border border-gray-300 p-2">{intern.age}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => deleteIntern(intern.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="border border-gray-300 p-2" colSpan="4">
                No interns found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
