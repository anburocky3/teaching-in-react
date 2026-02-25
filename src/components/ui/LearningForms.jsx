import { useState } from "react";
import Input from "./forms/Input";
import InputLabel from "./forms/InputLabel";
import InputGroup from "./forms/InputGroup";

export default function LearningForms() {
  // const [fullName, setFullName] = useState("Suresh");
  // const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // form validation before sending it to server api.
    if (formData.fullName.length < 3) {
      alert("Full name must be at least 3 characters long.");
      return;
    }

    if (formData.username.length < 3) {
      alert("Username must be at least 3 characters long.");
      return;
    }

    if (formData.email.length < 5 || !formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // SEND formData to server api using fetch
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: formData.fullName,
      email: formData.email,
      username: formData.username,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("https://mimic-server-api.vercel.app/users", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert("Form submitted successfully!");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 ">
        {formData.fullName.length > 3
          ? `Hello ${formData.fullName},`
          : "Learning Forms in React"}
      </h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
        <div className="">
          {/* <label className="block font-medium text-sm" htmlFor="fullName">
            Full Name
          </label> */}
          {/* <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Enter your Full Name"
            className="mt-1 bg-gray-200 px-4 py-1 rounded w-full outline-none"
            onChange={handleInputChange}
            value={formData.fullName}
            required
            /> */}
          <InputLabel htmlFor={"fullName"}>Full Name</InputLabel>
          <Input
            name="fullName"
            placeholder="Enter your Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <InputGroup
            label={"Username"}
            name={"username"}
            placeholder={"username"}
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-2">
          {/* <label className="block font-medium text-sm" htmlFor="email">
            Email
          </label> */}
          {/* <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="mt-1 bg-gray-200 px-4 py-1 rounded w-full"
            onChange={handleInputChange}
            value={formData.email}
            required
          /> */}
          {/* <InputLabel htmlFor={"email"}>Email</InputLabel>
          <Input
            name="email"
            placeholder="Enter your Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          /> */}

          <InputGroup
            label="Email"
            name="email"
            placeholder="Enter your Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-span-2">
          <button
            className={
              "bg-blue-500 text-white px-4 py-2 rounded w-full disabled:bg-blue-300 disabled:cursor-not-allowed "
            }
            disabled={formData.fullName.length < 3 || formData.email.length < 5}
          >
            Submit
          </button>
        </div>
      </form>

      <div className="my-5 bg-gray-200">
        <pre>
          My Default value is: {formData.fullName}, {formData.email} <br />
          My Default obj is: {JSON.stringify(formData)}
        </pre>
      </div>
    </div>
  );
}
