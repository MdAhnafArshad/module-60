import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main.jsx';
import Home from './component/Home.jsx';
import Register from './component/Register.jsx';
import Login from './component/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Orders from './component/Orders.jsx';
import PrivetRoute from './component/route/PrivetRoute.jsx';
import UserProfile from './component/UserProfile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
      path: "/",
      element:<Home></Home>,
     },
     {
      path:"/login",
      element:<Login></Login>,
     },
     {

      path:"/register",
      element:<Register></Register>,
     },
     {
      path:"/profile",
      element:<PrivetRoute><UserProfile></UserProfile></PrivetRoute>
     },
     {
      path:"/orders",
      element:<PrivetRoute><Orders></Orders></PrivetRoute>,
     }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
