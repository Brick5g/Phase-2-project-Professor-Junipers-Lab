import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="pokeball-logo"></div>
      <h1>Professor Juniper's Lab</h1>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/explore">Explore</NavLink>
        </li>

        <li>
          <NavLink to="/team">My Team</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;