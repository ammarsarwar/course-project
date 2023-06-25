import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils";

import { supabase } from "../../client";

import education from "../../images/education.svg";

const PasswordErrorMessage = () => {
  return (
    <p className="text-sm p-2 text-red-600">
      Password should have at least 8 characters
    </p>
  );
};

// const checkErrorMessage = () => {
//   return (
//     <p className="text-sm p-2 text-red-600">
//       Please agree to the terms and conditions
//     </p>
//   );
// };

const Register = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: fname,
          },
        },
      });
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
    setFname("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    console.log("form submitted");
  };

  const isFormValid = () => {
    return (
      fname && validateEmail(email) && password.value.length >= 8 && isChecked
    );
  };
  return (
    <div>
      <div className="px-60 p-6 ">
        <div className="border border-white bg-white rounded-3xl grid grid-cols-2 p-3">
          {/* left side */}

          <div className="px-8 ">
            <div className="mt-12 p-2">
              <p className="text-2xl">Get Started Now</p>
              <p className="text-sm pt-2 ">
                Enter your credentials to access your account
              </p>
            </div>

            <div className="pt-2 flex-row gap-3 text-center">
              <button className="p-2">Login with google</button>
              <button className="p-2">Login with Apple</button>
            </div>
            <div className="pt-5 text-center text-xs">or</div>

            <div className="pt-5">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col p-3">
                  <label className="" htmlFor="name">
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="border border-black rounded-lg mt-2 h-9 p-2 w-72"
                    value={fname}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col p-3">
                  <label className="" htmlFor="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    placeholder="abcexample@gmail.com"
                    className="border border-black rounded-lg mt-2 h-9 p-2 w-72 "
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col p-3">
                  <div className="flex flex-row gap-24">
                    <label className="" htmlFor="pass">
                      Password
                    </label>
                    <p className="text-blue-500" role="button" tabIndex="0">
                      Forgot Password?
                    </p>
                  </div>

                  <input
                    type="password"
                    id="pass"
                    className="border border-black rounded-lg mt-2 h-9 p-2 w-72 "
                    value={password.value}
                    onChange={(e) => {
                      setPassword({ ...password, value: e.target.value });
                    }}
                    onBlur={(e) => {
                      setPassword({ ...password, isTouched: true });
                    }}
                  />
                  {password.isTouched && password.value.length < 8 ? (
                    <PasswordErrorMessage />
                  ) : null}
                </div>
                <div className="flex flex-row gap-3 p-3">
                  <div>
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleCheck}
                    />
                  </div>

                  <p className="text-sm">
                    I agree to the <u>terms and conditions</u>
                  </p>
                </div>
                {/* {isChecked == false ? (
                  <p className="text-sm p-2 text-red-600">
                    Please agree to the terms and conditions
                  </p>
                ) : null} */}
                {/* {isChecked === false ? <checkErrorMessage /> : null} */}
                <div className="p-3">
                  <button
                    className="border rounded-full border-black bg-blue-800 w-72 h-9 text-white"
                    type="submit"
                    disabled={!isFormValid()}
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className="flex flex-row p-3 mt-4 text-sm gap-1">
                <div className="">Have an account?</div>
                <div
                  className="text-sm text-blue-500"
                  role="button"
                  tabIndex="0"
                  onClick={goToLogin}
                >
                  Sign in
                </div>
              </div>
            </div>
          </div>

          {/* right side */}

          <div className="bg-blue-600 border rounded-3xl  px-8 drop-shadow-2xl">
            <div className="mt-12 p-2 text-3xl text-white">
              Join and become one of the educators
            </div>
            <div className="mt-24">
              <img src={education} alt="education" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
