import "../assets/styles/layouts/Sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">
      <nav className="sidebar__nav">
        <a href="#" className="link">
          <div className="link-container">
            <img src="../icon-dashboard.svg" width="32px" height="32px" />
            <p>Dashboard</p>
          </div>
        </a>
        <a href="#" className="link">
          <div className="link-container">
            <img src="../icon-list.png" width="32px" height="32px" />
            <p>Projects</p>
          </div>
        </a>
        <a href="#" className="link">
          <div className="link-container">
            <img src="../icon-issues.png" width="32px" height="32px" />
            <p>Issues</p>
          </div>
        </a>
        <a href="#" className="link">
          <div className="link-container">
            <img src="../icon-roles.png" width="32px" height="32px" />
            <p>Manage Roles</p>
          </div>
        </a>
        <a href="#" className="link">
          <div className="link-container">
            <img src="../icon-users.png" width="32px" height="32px" />
            <p>Manage Users</p>
          </div>
        </a>
      </nav>
    </section>
  );
}

export default Sidebar;
