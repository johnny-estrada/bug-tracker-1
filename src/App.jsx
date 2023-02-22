import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Issues from "./pages/Issues";
import Roles from "./pages/Roles";
import Users from "./pages/Users";
import "./assets/styles/App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
