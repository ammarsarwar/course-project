import React, { useState, useEffect, useRef } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        console.log(userCredential);
        console.log("user signed in");
      })
      .catch((error) => {
        console.log(error);
      });
    setPassword("");
    // setEmail("");

    // setPassword({
    //   value: "",
    //   isTouched: false,
    // });
    // setPassword("");
    // console.log("logged in");
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            // value={password.value}
            // onChange={(e) => {
            //   setPassword({ ...password, value: e.target.value });
            // }}
            // onBlur={(e) => {
            //   setPassword({ ...password, isTouched: true });
            // }}
          />
        </div>
        <div className="p-3">
          <button
            className="border rounded-full border-black bg-blue-800 w-72 h-9 text-white"
            type="submit"
            disabled={!email && !password}
          >
            Login
          </button>
        </div>
      </form>
      <div className="flex flex-row p-3 mt-4 text-sm gap-1">
        <div className="">New student?</div>
        <div
          className="text-sm text-blue-500"
          role="button"
          tabIndex="0"
          onClick={goToRegister}
        >
          Create an account
        </div>
      </div>
    </div>
  );
};

export default Login;
