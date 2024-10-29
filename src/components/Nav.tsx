import { NavLink } from 'react-router-dom';
import '../index.css'

// necessary code to display the navigation bar and link between the pages

const Nav = () => {

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to='/' className={({ isActive }) => isActive ? "active nav-item" : "nav-item"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/SavedCandidates' className={({ isActive }) => isActive ? "active nav-item" : "nav-item"}>Potential Candidates</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
