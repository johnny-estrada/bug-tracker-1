import "./Sidebar.css";

function Sidebar(props) {
  return (
    <aside className="sidebar">
      <header className="sidebar__header">{props.logo}</header>
      <nav className="sidebar__nav" role="navigation">
        {props.links}
      </nav>
    </aside>
  );
}

export default Sidebar;
