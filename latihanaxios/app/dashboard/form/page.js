"use client";
import axios from "axios";
import { useState } from "react";

export default function PostForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/users", {
        first_name: firstName,
        last_name: lastName,
        email: email,
      });

      setFirstName("");
      setLastName("");
      setEmail("");

      setMessage("Data berhasil dikirim!");
    } catch (error) {
      console.error("Error pada saat Input form:", error);
      setMessage("Terjadi kesalahan saat mengirim data.");
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 max-w-md bg-gray-200 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-primary">Submit User Data</h1>

      {message && (
        <div
          className={`mb-4 p-2 text-center rounded ${
            message.includes("berhasil")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-gray-700"
            required
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-gray-700"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-gray-700"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-highlight text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
