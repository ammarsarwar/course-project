import React from "react";
import { Route, Routes } from "react-router-dom";
import { supabase } from "./client";
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
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
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
