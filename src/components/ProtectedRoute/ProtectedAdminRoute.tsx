import { Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import {useSelector} from 'react-redux';

function ProtectedAdminRoute(
  props: {
    component?: any,
    children?: any,
    exact?: boolean,
    path?: string
  }
) {

  const user = useSelector((
    store: {
      user: {
        auth_level: number
      }
    }
  ) => store.user);

  const ProtectedAdminComponent = props.component || (() => props.children);

  return (
    <Route
      {...props}
    >
      {user.auth_level === 1 ?
        // If the user is logged in, show the protected component
        <ProtectedAdminComponent />
        :
        // Otherwise, redirect to the Loginpage
        <LoginPage />
      }
    </Route>

  );
}

export default ProtectedAdminRoute;
