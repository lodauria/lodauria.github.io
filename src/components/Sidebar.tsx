function Sidebar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#/projects">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
