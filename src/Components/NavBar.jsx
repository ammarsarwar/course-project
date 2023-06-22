import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const handleClick = () => {
    alert("You have logged in!");
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <div className="pt-5">
          <p className="text-2xl font-bold ">coursePortal</p>
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
          <button
            class="rounded-full bg-black text-white p-1 w-20 drop-shadow-lg border hover:border-slate-400"
            onClick={handleClick}
          >
            login
          </button>
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
        <p className="font-bold">Courses</p>
        <p className="font-bold">About Us</p>
        <p className="font-bold">Mentor</p>
        <p className="font-bold" role="button" tabIndex="0">
          Blog
        </p>
        <p className="font-bold">Contact Us</p>
      </div>
    </div>
  );
};

export default NavBar;
