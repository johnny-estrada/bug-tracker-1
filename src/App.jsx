import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <Sidebar />
      
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
