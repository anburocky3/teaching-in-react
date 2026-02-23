import { useEffect, useState } from "react";

export default function RenderUsers() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    // will run at first!

    // validation on searchTerm and limit can be added here before making the API call
    async function fetchUsers() {
      const response = await fetch(
        "https://mimic-server-api.vercel.app/users?_limit=" +
          limit +
          "&q=" +
          searchTerm,
      );
      const data = await response.json();
      setUsers(data);
      // .then((res) => res.json())
      // .then((data) => setUsers(data));
    }

    fetchUsers();
  }, [searchTerm, limit]);

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold mb-2">
          Users ({users.length}){" "}
          {searchTerm && (
            <span className="font-light text-xs">
              You have searched for: {searchTerm}
            </span>
          )}
        </h2>
        <div>
          <select
            name="limit"
            id="limit"
            onChange={(e) => setLimit(e.target.value)}
            className="border border-gray-300 rounded px-2 py-0.5 mr-4"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <input
            type="search"
            className="border border-gray-300 rounded px-2 py-0.5 outline-none"
            placeholder="Search Users"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {/* conditional-rendering */}
      {/* (condition) ? 'true' : 'false'  */}
      {users.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : null}

      {users.length > 0 && (
        <ul className="space-y-2">
          {users.map((user) => {
            return (
              <li
                className="bg-blue-100 p-3 rounded "
                key={`user.id-${user.id}`}
              >
                <h4 className="font-semibold">{user.name}</h4>
                <small>{user.email}</small>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
