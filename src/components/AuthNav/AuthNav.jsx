import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Button variant="outlined" color="grayBase" sx={{ mr: 2 }}>
        <NavLink to="/register">Register</NavLink>
      </Button>
      <Button variant="outlined" color="grayBase" sx={{ mr: 2 }}>
        <NavLink to="/login">Login</NavLink>
      </Button>
    </Box>
  );
};

export default AuthNav;
// sx={{ flexGrow: 0, mr: 2 }}
{
  /* <Box>
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

      <Box sx={{ flexGrow: 0 }}>{!isLoggedIn ? <AuthNav /> : <UserMenu />}</Box>
    </Toolbar>
  </AppBar>
</Box>; */
}
