import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Container } from '@mui/material';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
