import React from 'react'
import { ToastContainer } from 'react-toastify';
import  NavBar  from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';


const Layout = (props) => {
  return (
    <>
      <ToastContainer />
      <NavBar {...props}  sticky="top" />
      <Home />
      <Outlet />
      
    </>
  );
};

export default Layout;