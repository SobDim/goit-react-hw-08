import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/auth/operations';
import { selectEmail } from '../../redux/auth/slice';
import { Box, Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector(selectEmail);
  function handleLogout() {
    dispatch(logout());
    navigate('/login');
  }
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <p>Welcome, {userEmail}</p>
      <Button
        variant="outlined"
        color="grayBase"
        onClick={handleLogout}
        sx={{ mr: 2, backgroundColor: '#1a1a1a' }}
      >
        <NavLink to="/contacts">Contacts</NavLink>
      </Button>

      <Button
        variant="outlined"
        color="grayBase"
        onClick={handleLogout}
        sx={{ mr: 2, backgroundColor: '#1a1a1a' }}
      >
        <NavLink to="/login">Logout</NavLink>
      </Button>
    </Box>
  );
};

export default UserMenu;
