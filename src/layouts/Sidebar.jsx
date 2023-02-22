import Logo from "../components/ui/Logo";
import Links from "../components/ui/Links";
import "../assets/styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <Logo />
      </header>
      <nav className="sidebar__nav" role="navigation">
        <Links />
      </nav>
    </aside>
  );
}

export default Sidebar;
