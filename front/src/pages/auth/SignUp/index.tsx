import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAsync } from '../../../store/auth/authSlice';

interface FormData {
  login: string;
  password: string;
}

const SignUp: React.FC = () => {
  // const dispatch = useDispatch();
  // const auth = useSelector((state: RootState) => state.auth);
  const [formData, setFormData] = useState<FormData>({
    login: '',
    password: '',
  });

  const onInputChange = useCallback((type: keyof FormData, event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [type]: event.target.value }));
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // dispatch(registerUserAsync(formData));
    },
    // [dispatch, formData]
    []
  );

  return (
    <div className="w-full flex justify-center">
      <div className="w-96">
        <h4>Sign up</h4>

        <form onSubmit={onSubmit} className="flex flex-col">
          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            value={formData.login}
            onChange={(e) => onInputChange('login', e)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => onInputChange('password', e)}
          />

          <button type="submit">Submit</button>
        </form>

        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default SignUp;
