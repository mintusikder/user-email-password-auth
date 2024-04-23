import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../firebase/firebase.cinfig";

import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Please Set Upper case");
      return;
    }

    setError("");
    setSucess("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSucess("User Create Sucessfull");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="mx-auto md:w-1/2 bg-slate-300 p-16">
      <form onSubmit={handelSubmit}>
        <input
          className="w-full"
          placeholder="Email Address"
          type="email"
          name="email"
          id=""
        />{" "}
        <br />
        <br />
        <div className="relative border-red-400">
          <input
            className="w-full"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            id=""
          />
          <span
            className="absolute top-1 right-2"
            onClick={() => setshowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye> </FaEye>}
          </span>
        </div>
        <br />
    
       <input className="me-2" type="checkbox" name="terms" id="terms" />
       <label htmlFor="terms">Accept Our terms</label> <br /> <br />
        <button>
          <input type="submit" value="Register" />
        </button>
        {error && <p className="text-red-400">{error}</p>}
        {sucess && <p className="text-green-500"> {sucess}</p>}
      </form>
    </div>
  );
};

export default Register;
