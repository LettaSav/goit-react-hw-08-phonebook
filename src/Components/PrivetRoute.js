import { Route, Redirect } from 'react-router-dom';
import { getIsAuthenticated } from '../redux/authOperation/auth-seletor';
import { useSelector } from 'react-redux';

export default function PriveteRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <Route
      {...routeProps}
      render={isLoggedIn ? children : <Redirect to={redirectTo} />}
    ></Route>
  );
}
