import { Switch } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import PrivateRoute from './Components/PrivetRoute';
import PublicRoute from './Components/PublicRoute';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/authOperation/auth-operations';

import React from 'react';

const HomePage = lazy(() => import('./views/HomePage'));
const RegisterPage = lazy(() => import('./views/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));
const PhoneBookPage = lazy(() => import('./views/PhoneBookPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <Suspense fallback={<p>Загружаем...</p>}>
      <Switch>
        <PublicRoute exact path="/" component={HomePage} />
        <PublicRoute
          path="/register"
          restricted
          redirectTo="/contacts"
          component={RegisterPage}
        />
        <PublicRoute
          path="/login"
          restricted
          redirectTo="/contacts"
          component={LoginPage}
        />
        <PrivateRoute
          path="/contacts"
          redirectTo="/login"
          component={PhoneBookPage}
        />
      </Switch>
    </Suspense>
  );
}

export default App;
