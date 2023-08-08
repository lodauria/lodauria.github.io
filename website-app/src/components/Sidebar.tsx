function Sidebar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#/projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#/contacts">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
