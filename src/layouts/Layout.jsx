import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "../assets/styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div class="container">
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="content">
        <Navbar />
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
