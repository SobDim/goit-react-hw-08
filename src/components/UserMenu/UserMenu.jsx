import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/auth/operations';
import { selectEmail } from '../../redux/auth/slice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector(selectEmail);
  function handleLogout() {
    dispatch(logout());
    navigate('/login');
  }
  return (
    <div>
      <NavLink to="/contacts">Contacts</NavLink>
      <p>Welcome, {userEmail}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
