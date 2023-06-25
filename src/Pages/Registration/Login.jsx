import React, { useState, useEffect, useRef } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");

    setPassword({
      value: "",
      isTouched: false,
    });
    console.log("logged in");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-5 p-3">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border border-black rounded-lg mt-2 h-9 p-2 w-72 "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            id="pass"
            className="border border-black rounded-lg mt-2 h-9 p-2 w-72 "
            placeholder="Enter your password"
            value={password.value}
            onChange={(e) => {
              setPassword({ ...password, value: e.target.value });
            }}
            onBlur={(e) => {
              setPassword({ ...password, isTouched: true });
            }}
          />
        </div>
        <div className="p-3">
          <button
            className="border rounded-full border-black bg-blue-800 w-72 h-9 text-white"
            type="submit"
            disabled={!email && !password}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
