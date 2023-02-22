import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "../assets/styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div class="container">
      <div class="container__left">
        <Sidebar />
      </div>
      <div class="container__right">
        <Navbar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
