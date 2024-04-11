import React from 'react';
import axios from 'axios';
import { signIn } from '../store/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const SignInPage: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://reqres.in/api/login', {
        email, password
      });
      if(res.data) {
        navigate('/dashboard');
        // localStorage.setItem('us', res.data.token);
        dispatch(signIn({ email, token: res.data.token }));
      }
    } catch (err) {
       console.log(err);
    }
  };
  const signBtn = location.pathname === '/signup' ? 'Sign Up' : 'Sign In';
  
  useEffect(() => {
    const userToken = localStorage.getItem('us');
    if (userToken) {
      navigate('/dashboard');
    }
  }, [location]);

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">{ signBtn }</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">{ signBtn }</button>
      </form>
    </div>
  );
};

export default SignInPage;
