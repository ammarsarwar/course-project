import React, { useState, useEffect, useRef } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import Register from "./Pages/Registration/Register";
import Login from "./Pages/Registration/Login";
import HomePageLayout from "./Pages/HomePageLayout";

import Courses from "./Pages/Courses";
import AboutUs from "./Pages/AboutUs";
import Mentor from "./Pages/Mentor";
import ContactUs from "./Pages/ContactUs";

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setAuthUser(authUser);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={authUser ? <HomePageLayout /> : <Login />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/mentor" element={<Mentor />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
          </Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
