import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout  from './pages/Layout';
import SignUp from './pages/SignUp';
import Login from './pages/Login'
import NotFound from './pages/NotFound';
import Home from './pages/Home'

import 'bootstrap/dist/css/bootstrap.min.css';

const  App  = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='/all' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sing-up' element={<SignUp />} />
          
          <Route path='404' element={<NotFound />} />
         
        </Route>
      </Routes>
    </div>
  );
}

export default App;
