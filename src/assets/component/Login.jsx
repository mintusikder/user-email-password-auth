import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import auth from "../firebase/firebase.cinfig";
import { Link } from "react-router-dom";

const Login = () => {
  const [error , setError] = useState("")
  const [sucess, setSucess] = useState("")
  const emailRef = useRef(null)
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
        // setSucess("Login Sucess")
        if(result.user.emailVerified){
          console.log("Sucessfull")
          setSucess("Sucessfull")
        }
        else{
          alert("Please varify your email")
          
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
      });
  };


  const handelForget = ()=>{
    const email = emailRef.current.value
    if(!email){
      console.log("provide email",emailRef.current.value)
      return;
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      console.log("Invalid email format");
    return;
    }
    // send validation 
    sendPasswordResetEmail(auth,email)
    .then(() => {
      console.log("pleade cheak your email")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage,errorCode)
      // ..
    });
  }


  return (
    <div className="mx-auto md:w-1/2 bg-slate-400 p-12">
      <h2 className="text-3xl font-bold">Please Login</h2>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="email" placeholder="Email Address" /> <br />
        <br />
        <input type="password" name="password" placeholder="Password" /> <br />
        <br />
        <input type="submit" value="Login" />
        <label className="label">
            <a onClick={handelForget} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        {
          error && <p className="text-red-600">{error}</p>
        }
        {
          sucess && <p className="text-green-600">{sucess}</p>
        }
      </form>
      <p>New to this website Please <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
