import React from 'react'
import { ToastContainer } from 'react-toastify';
import  NavBar  from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import Welcome from '../components/welcome';
import Categories from '../components/Categories';
import Footer from '../components/Footer';


const Layout = (props) => {
  return (
    <>
      <ToastContainer />
      <Welcome />
      <Categories />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;