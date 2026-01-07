import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/request-reset`,
        { email }
      );
      setMessage(res.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Unable to send reset email");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Forgot Password?</h2>
        <p className="mb-4">Enter your email to receive a reset link</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Send Reset Link
          </button>
        </form>
        {message && <p className="mt-4 text-red-500">{message}</p>}
        <button
          onClick={() => navigate("/login")}
          className="mt-4 text-blue-500 underline"
        >
          ← Back to Login
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
