import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  
  const user = useSelector((
    store: {
      user: {
        id: number,
        auth_level: number
      }
    }
  ) => store.user);

  return (
    <div className="nav">

      {/* clickable nav title text */}
      <Link to="/home">
        <h2 className="nav-title">The Duvall Inventory</h2>
      </Link>

      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          <>
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          </>
        )}

        {/* If an admin user is logged in, show these links */}
        {user.auth_level === 1 && (
          <>
            <Link className="navLink" to="/admin/all">
              All Questions
            </Link>

            <Link className="navLink" to="/admin/new">
              New Question
            </Link>
          </>
        )}

        {/* If a basic user is logged in, show these links */}
        {user.auth_level === 0 && (
          <>
            <Link className="navLink" to="/home">
              Home
            </Link>
          </>
        )}

        {/* Everyone can see About */}
        <Link className="navLink" to="/about">
          About
        </Link>

        {/* If any user is logged in, show these links */}
        {user.id && (
          <>
            <LogOutButton className="navLink" />
          </>
        )}

      </div>
    </div>
  );
}

export default Nav;
