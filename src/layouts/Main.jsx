import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Issues from "../pages/Issues";
import Roles from "../pages/Roles";
import Users from "../pages/Users";

function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default Main;
