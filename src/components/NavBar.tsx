import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface NavItemProps {
  to: string;
  children: any;
}

function NavItem({ to, children, ...props }: NavItemProps) {
  const resPath = useResolvedPath(to);
  const isActive = useMatch({ path: resPath.pathname, end: true });

  return (
    <Link className={isActive ? "nav-link active" : "nav-link"} to={to}>
      <li className="nav-li">{children}</li>
    </Link>
  );
}

function NavBar() {
  return (
    <nav className="top-navbar">
      <ul className="nav-ul">
        <NavItem to="/#">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
      </ul>
      <ul className="nav-ul nav-ul-header">Lorenzo D'Auria WebSite</ul>
    </nav>
  );
}

export default NavBar;
