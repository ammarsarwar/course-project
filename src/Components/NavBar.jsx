import React, { useState, useEffect, useRef } from "react";
import { getAuth, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  //sign out func//

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      console.log("user signed out");
    } catch (error) {
      console.log(error);
    }
  };

  const auth = getAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const { displayName, email } = user;
        setUserData({ displayName, email });
      }
    };

    fetchUserData();
  }, []);

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };
  const goToBlog = () => {
    navigate("/blog");
  };

  const goToCourse = () => {
    navigate("/courses");
  };

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <div className="pt-5">
          <p
            className="text-2xl font-bold "
            onClick={goToHomePage}
            role="button"
            tabIndex="0"
          >
            coursePortal
          </p>
        </div>
        <div className="pt-5">
          <form className="relative inline-block">
            {/* <span className="absolute inset-2.5 text-xl">
              <AiOutlineSearch />
            </span> */}
            <input
              type="text"
              placeholder="search for courses"
              className="rounded-full p-2 w-96 border hover:border-slate-400 drop-shadow-lg"
            />
          </form>
        </div>
        <div className="pt-5">
          {userData ? (
            userData.displayName
          ) : (
            <button
              className="rounded-full bg-black text-white p-1 w-20 drop-shadow-lg border hover:border-slate-400"
              onClick={handleClick}
            >
              login
            </button>
          )}

          <button
            className="rounded-full bg-black text-white p-1 w-20 drop-shadow-lg border hover:border-slate-400"
            onClick={handleLogout}
          >
            Sign out
          </button>
          {/* <button
            className="rounded-full bg-black text-white p-1 w-20 drop-shadow-lg border hover:border-slate-400"
            onClick={handleClick}
          >
            login
          </button> */}
        </div>
      </div>

      <div className="p-5">
        <hr></hr>
      </div>

      <div className="px-60 flex flex-row gap-10">
        <span className="text-2xl">
          <GiHamburgerMenu />
        </span>

        <p className="font-bold">Categories</p>
        <p
          className="font-bold"
          onClick={goToCourse}
          role="button"
          tabIndex="0"
        >
          Courses
        </p>
        <p className="font-bold">About Us</p>
        <p className="font-bold">Mentor</p>
        <p className="font-bold" role="button" tabIndex="0" onClick={goToBlog}>
          Blog
        </p>
        <p className="font-bold">Contact Us</p>
      </div>
    </div>
  );
};

export default NavBar;
