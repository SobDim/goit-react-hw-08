import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/slice.js';
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';

const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!isLoggedIn ? (
          <li>
            <AuthNav />
          </li>
        ) : (
          <li>
            <UserMenu />
          </li>
        )}
      </ul>
    </header>
  );
};

export default NavBar;
