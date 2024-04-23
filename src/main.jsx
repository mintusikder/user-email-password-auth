import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/root/Root.jsx';
import HeroRegister from './assets/component/HeroRegister.jsx';
import Home from './assets/component/Home.jsx';
import Login from './assets/component/Login.jsx';
import Register from './assets/component/Register.jsx';
import Login2 from './assets/component/Login2.jsx';
import Register2 from './assets/component/Register2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/hero",
        element: <HeroRegister></HeroRegister>
      },
    
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login2",
        element: <Login2></Login2>
      },
      {
        path: "/register2",
        element: <Register2></Register2>
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
