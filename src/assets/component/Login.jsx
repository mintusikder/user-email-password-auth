import React from 'react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  return (
    <div className="mx-auto md:w-1/2 bg-slate-400 p-12">
      <h2 className="text-3xl font-bold">Please Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email Address" /> <br /><br />
        <input type="password" name="password" placeholder="Password" /> <br /><br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
