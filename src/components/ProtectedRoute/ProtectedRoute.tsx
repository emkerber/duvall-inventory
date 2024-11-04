import { Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import {useSelector} from 'react-redux';

function ProtectedRoute(
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
        id: string
      }
    }
  ) => store.user);

  const ProtectedComponent = props.component || (() => props.children);

  return (
    <Route
      {...props}
    >
      {user.id ?
        // If the user is logged in, show the protected component
        <ProtectedComponent />
        :
        // Otherwise, redirect to the Loginpage
        <LoginPage />
      }
    </Route>

  );
}

export default ProtectedRoute;
