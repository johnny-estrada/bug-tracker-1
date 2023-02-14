import Logo from "../components/ui/Logo";
import Navigation from "../components/ui/Navigation";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <Logo />
      </header>
      <Navigation />
    </aside>
  );
}

export default Sidebar;
