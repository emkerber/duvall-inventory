import { Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import { useSelector } from 'react-redux';
function ProtectedAdminRoute(props) {
    const user = useSelector((store) => store.user);
    // Component may be passed in as a "component" prop,
    // or as a child component.
    const ProtectedAdminComponent = props.component || (() => props.children);
    // We return a Route component that gets added to our list of routes
    return (<Route 
    // all props like 'exact' and 'path' that were passed in
    // are now passed along to the 'Route' Component
    {...props}>
      {user.auth_level === 1 ?
            // If the user is logged in, show the protected component
            <ProtectedAdminComponent />
            :
                // Otherwise, redirect to the Loginpage
                <LoginPage />}
    </Route>);
}
export default ProtectedAdminRoute;
