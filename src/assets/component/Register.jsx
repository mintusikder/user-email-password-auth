import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import auth from "../firebase/firebase.cinfig";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted =  e.target.terms.checked
    console.log(name,email, password,accepted);

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Please Set Upper case");
      return;
    }
    else if(!accepted){
      setError("Please Accept")
      return
    }

    setError("");
    setSucess("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSucess("User Create Sucessfull");
        // update Profile 
        updateProfile(result.user,{
          displayName: name, 
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        .then(()=> console.log("Profile Update"))
        .catch(error =>{
          console.log(error)
        })
        // send email verification
        sendEmailVerification(result.user)
        .then(() =>{
          console.log("Please varify your email and varify your account")
        })

      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        
      });
  };

  return (
    <div className="mx-auto md:w-1/2 bg-slate-300 p-16">
      <form onSubmit={handelSubmit}>
        <input type="name" name="name" id="" placeholder="Enter Name" /> <br /><br />
        <input
          className="w-full"
          placeholder="Email Address"
          type="email"
          name="email"
          id=""
        />{" "}
        <br />
        <br />
        <div className="relative ">
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
      <p>Already Have an account Please <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
