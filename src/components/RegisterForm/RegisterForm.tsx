import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const errors = useSelector((
    store: { 
      errors: { 
        registrationMessage: string 
      }
    }
  ) => store.errors);

  const dispatch = useDispatch();

  const registerUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>

      <h2>Register User</h2>

      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
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
            value={password}
            required
            onChange={(event: FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value)}
          />
        </label>
      </div>

      <div>
        <input 
          className="btn" 
          type="submit" 
          name="submit" 
          value="Register" 
        />
      </div>

    </form>
  );
}

export default RegisterForm;
