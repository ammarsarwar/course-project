import React, { useState } from "react";


import { courses, blogs } from "../Data/data.js";

import homepage from "../images/homepage.svg";
import marketing from "../images/marketing.svg";

import { SlBadge } from "react-icons/sl";
import { FaVideo } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { GiStoneSphere } from "react-icons/gi";

const HomePage = () => {
  const [email, setEmail] = useState("");

  const handleCourse = (title, author, price, cutprice) => {
    console.log(
      "Title: ",
      title,
      "Author: ",
      author,
      "Price: ",
      price,
      "Discount: ",
      cutprice
    );
  };

  const handleBlog = (title, date, time) => {
    console.log("Title: ", title, "Date: ", date, "Time to read: ", time);
  };

  const handleInfo = () => {
    if (email === "") {
      alert("Please Enter your email address!");
    } else {
      alert("Your email address " + email + " has been saved!");
    }
  };
  return (
    <div>
      {/*First section */}

      <div className="px-60 p-6">
        <div className="grid grid-cols-2">
          {/*left side */}

          <div>
            <p className="text-6xl font-bold mt-20">
              Learning skills <br></br> for a better career
            </p>
            <p className="pt-6">
              We believe the world is more beautiful as each person gets more
              skills and knows how to implement
            </p>
            <div className="p-3 mt-10">
              <form>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  className="p-2 rounded-l-lg border-2 border-black "
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="rounded-r-lg bg-black text-white p-2 w-28 "
                  onClick={handleInfo}
                >
                  14 Days Trial
                </button>
              </form>
            </div>
            <div>
              <div className="p-3">
                <ul className="list-disc text-pink-600">
                  <li>32K+ Review with 5star rating</li>
                </ul>
              </div>
            </div>
          </div>
          {/*right side */}

          <div className="pl-20 p-8">
            <img src={homepage} style={{ width: 450 }} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-16 pl-5 ">
          <div>
            <p className="font-bold text-3xl">12K+</p>
            <p className="text-slate-600">Fresh Graduates</p>
          </div>
          <div>
            <p className="font-bold text-3xl">9+</p>
            <p className="text-slate-600">Years of Experience</p>
          </div>
          <div>
            <p className="font-bold text-3xl">358+</p>
            <p className="text-slate-600">Excellence Awards</p>
          </div>
          <div>
            <p className="font-bold text-3xl">47+</p>
            <p className="text-slate-600">Brand Partners</p>
          </div>
        </div>
      </div>

      {/*Second section*/}

      <div className="px-60 p-6">
        <p className="font-bold text-4xl p-5 text-center">Popular courses</p>
        <div className="flex flex-row gap-5 justify-center p-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="rounded-md  p-5 bg-white drop-shadow-2xl hover:bg-slate-100"
              onClick={() => {
                handleCourse(
                  course.title,
                  course.author,
                  course.price,
                  course.cutPrice
                );
              }}
              role="button"
              tabIndex="0"
            >
              <div className="flex flex-col">
                {/*first col*/}

                <div>
                  <img
                    src={marketing}
                    alt="marketing_course"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    className=""
                  />
                  <p className="font-bold">{course.title}</p>
                  <p className="text-slate-600 text-sm">{course.author}</p>
                </div>

                {/*second col*/}

                <div className="">
                  <div className="flex flex-row gap-3 mt-3 ">
                    <p className="font-bold text-2xl">{course.price}</p>
                    <p className="text-black line-through text-xs mt-2">
                      {course.cutPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="rounded-full bg-black text-white p-3 w-28 drop-shadow-lg border hover:border-slate-400 ">
            View All
          </button>
        </div>
      </div>

      {/*divider*/}

      <div className="px-60 p-6 flex flex-row gap-52 bg-white">
        <div className="flex flex-row gap-5">
          <span className="text-2xl mt-2">
            <SlBadge />
          </span>
          <p className="font-bold">
            World's best instructors
            <br></br>
            <b>18,500</b> Courses
          </p>
        </div>

        <div className="flex flex-row gap-5">
          <span className="text-2xl mt-2">
            <FaVideo />
          </span>
          <p className="font-bold">
            Live classes & video courses
            <br></br>
            <b>18,500</b> Courses
          </p>
        </div>
        <div className="flex flex-row gap-5">
          <span className="text-2xl mt-2">
            <IoIosCheckmarkCircleOutline />
          </span>
          <p className="font-bold">
            Over active students
            <br></br>
            <b>367,000</b> Students currently enrolled
          </p>
        </div>
      </div>

      {/*Third section */}

      <div className="px-60 p-6 mt-10">
        <p className="font-bold text-4xl p-5 text-center">Top categories</p>
        <div className="flex flex-row gap-5 justify-center p-3">
          <div className=" flex flex-col " role="button" tabIndex="0">
            <span className=" relative text-3xl top-20 flex justify-center border border-slate-900 bg-white rounded-full">
              <FaBookOpen />
            </span>
            <div className="rounded-md border border-black p-5 text-lg bg-purple-500 w-48 text-center font-bold  ">
              Acadmic
            </div>
          </div>
          <div className=" flex flex-col " role="button" tabIndex="0">
            <span className=" relative text-3xl top-20 flex justify-center border border-slate-900 bg-white rounded-full">
              <BsFillGearFill />
            </span>
            <div className="rounded-md border border-black p-5 text-lg bg-sky-600 w-48 text-center font-bold ">
              Technical
            </div>
          </div>
          <div className=" flex flex-col " role="button" tabIndex="0">
            <span className=" relative text-3xl top-20 flex justify-center border border-slate-900 bg-white rounded-full">
              <BsFillRocketTakeoffFill />
            </span>
            <div className="rounded-md border border-black p-5 text-lg bg-pink-400 w-48 text-center font-bold  ">
              Vocational
            </div>
          </div>
          <div className=" flex flex-col " role="button" tabIndex="0">
            <span className=" relative text-3xl top-20 flex justify-center border border-slate-900 bg-white rounded-full">
              <GiStoneSphere />
            </span>
            <div className="rounded-md border border-black p-5 text-lg bg-amber-400 w-48 text-center font-bold ">
              Others
            </div>
          </div>
        </div>
      </div>

      {/*Fourth Section */}
      <div className="px-60 p-6 mt-10">
        <p className="font-bold text-4xl p-5 text-center">
          Read our daily blogs
        </p>
        <div className="flex flex-row gap-5 justify-center p-3 mt-5">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="rounded-md border-b-4 border-black p-5 bg-white w-72 drop-shadow-2xl hover:bg-slate-100"
              onClick={() => {
                handleBlog(blog.title, blog.date, blog.time);
              }}
              role="button"
              tabIndex="0"
            >
              <div className="flex flex-col">
                <div>
                  <img
                    src={marketing}
                    alt="marketing_course"
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    className=""
                  />
                </div>
                <div>
                  <p className="font-bold">{blog.title}</p>
                  <div className="flex flex-row gap-24 pt-5">
                    <p className="text-sm text-slate-500">{blog.date}</p>
                    <p className="text-sm text-slate-500">{blog.time}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
