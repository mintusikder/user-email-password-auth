import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../firebase/firebase.cinfig";

const Login = () => {
  const [error , setError] = useState("")
  const [sucess, setSucess] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setError("")
    setSucess("")
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSucess("Login Sucess")
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
      });
  };

  return (
    <div className="mx-auto md:w-1/2 bg-slate-400 p-12">
      <h2 className="text-3xl font-bold">Please Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email Address" /> <br />
        <br />
        <input type="password" name="password" placeholder="Password" /> <br />
        <br />
        <input type="submit" value="Login" />
        {
          error && <p className="text-red-600">{error}</p>
        }
        {
          sucess && <p className="text-green-600">{sucess}</p>
        }
      </form>
    </div>
  );
};

export default Login;
