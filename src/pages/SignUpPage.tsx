import React from 'react';

const SignUpPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
