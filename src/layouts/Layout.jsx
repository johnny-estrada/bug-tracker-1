import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div class="layout-container">
        <div class="left-navbar">
          <Sidebar />
        </div>
        <div class="main-content">
          <TopNavbar />

          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
