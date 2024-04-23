import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/slice.js';
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav.jsx';
import UserMenu from '../UserMenu/UserMenu.jsx';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import { IconButton, Box } from '@mui/material';

export default function NavBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <NavLink to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <ContactPhoneOutlinedIcon />
            </IconButton>
          </NavLink>

          <Box sx={{ flexGrow: 0 }}>
            {!isLoggedIn ? <AuthNav /> : <UserMenu />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
