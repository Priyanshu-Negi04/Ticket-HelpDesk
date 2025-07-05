import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#4AC9B1] min-h-screen flex items-center justify-center">
      <div className="bg-[#A1DED7] w-[700px] max-w-full p-10 flex flex-col items-center">
        {!submitted ? (
          <>
            <p className="text-center mb-8 max-w-md">
              Don’t worry, Enter your email below and we will send you a link to change password.
            </p>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-400 w-[450px] max-w-full h-12 px-4 mb-8 text-black text-base"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#0AC70A] text-white rounded-lg w-[230px] max-w-full h-12 mb-6 text-lg"
              >
                Submit
              </button>
            </form>
            <button
              className="bg-[#0B66D0] text-white rounded-lg w-[230px] max-w-full h-12 text-lg"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </>
        ) : (
          <>
            <p className="text-center mb-8 max-w-md text-green-700 font-semibold">
              If this email is registered, a password reset link has been sent!
            </p>
            <button
              className="bg-[#0B66D0] text-white rounded-lg w-[230px] max-w-full h-12 text-lg"
              onClick={() => navigate("/login")}
            >
              Back to Sign In
            </button>
          </>
        )}
      </div>
    </div>
  );
}
