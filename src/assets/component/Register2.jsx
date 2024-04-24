// import React from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.cinfig";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register2 = () => {
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const [showPasswor, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked
    console.log(email, password,accepted);

    if (password.length < 6) {
      setError("Please provide 6 number");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Please Set Upper case");
      return;
    }
    else if(!accepted){
        setError("Please Accept");
        return;
    }
    setError("");
    setSucess("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSucess("Register sucess");
      })
      .then((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="bg-gray-400 p-12 mx-auto w-1/2">
      <h2 className="text-3xl font-bold">Please Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="w-full" placeholder="Email Address" type="email" name="email" required />{" "}
        <br />
        <br />
        <div className="relative">
          <input 
          className="w-full"
            placeholder="Password"
            type={showPasswor ? "text" : "password"}
            name="password"
          />
          <span className="absolute top-1 right-1" onClick={() => setShowPassword(!showPasswor)}>
            {showPasswor ? <FaEyeSlash></FaEyeSlash> : <FaEye> </FaEye>}
          </span>
        </div>
        <br />
  
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">Please Accept</label>
        <br />
        <input type="submit" value="Register" />
        {error && <p className="text-red-400">{error}</p>}
        {sucess && <p className="text-green-400">{sucess}</p>}
      </form>
      
    </div>
  );
};

export default Register2;
