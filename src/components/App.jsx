import './App.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import NotFound from '../pages/NotFound/NotFound';
import { selectIsRefreshing } from '../redux/auth/authSlice.js';
import Loader from './Loader/Loader';
import RestrictedRoute from '../routes/RestrictedRoute/RestrictedRoute';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import PrivateRoute from '../routes/PrivateRoute/PrivateRoute.jsx';
import HomeP from '../pages/HomePage/HomeP.jsx';
import { refreshUser } from '../redux/auth/operations.js';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeP />} />
          <Route
            path="register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
