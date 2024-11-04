import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const errors = useSelector((
    store: {
      errors: {
        loginMessage: string
      }
    }
  ) => store.errors);

  const dispatch = useDispatch();

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        }
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>

      <h2>Login</h2>

      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}

      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event: FormEvent<HTMLInputElement>) => setUsername(event.currentTarget.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event: FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value)}
          />
        </label>
      </div>

      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>

    </form>
  );
}

export default LoginForm;
