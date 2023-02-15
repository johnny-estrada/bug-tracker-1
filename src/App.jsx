import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </Layout>
    </div>
  );
}

export default App;
