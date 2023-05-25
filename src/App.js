
import React from 'react';
import { useState,useEffect }    from 'react';
import axios from 'axios';
import { toastError } from './lib/toastError';
import { Routes, Route } from 'react-router-dom';
import Layout  from './pages/Layout';
import SignUp from './pages/SignUp';
import Login from './pages/Login'
import NotFound from './pages/NotFound';
import Home from './pages/Home'


import "bootstrap/dist/css/bootstrap.min.css";


const  App  = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [gotCookie, setGotCookie] = useState(false);
  const url = 'http://localhost:5000/api/user/me'
  useEffect(() => {
    const checkToken = async () => {
      try {
        const { data } = await axios(url
          ,
          {
            withCredentials: true,
          }
        );
        setUser(data);
        setIsAuth(true);
      } catch (error) {
        toastError(error.message);
      }
    };
    checkToken();
  }, [gotCookie]);

  return (
    <div>
       <Routes>
        <Route path='/' element={
        <Layout
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              setUser={setUser}
              setGotCookie={setGotCookie} />} />
        <Route path='/all' element={<Home />} />
          <Route path='/login' element={<Login isAuth={isAuth} setGotCookie={setGotCookie} />} />
          <Route path='/sing-up' element={<SignUp isAuth={isAuth} setGotCookie={setGotCookie} />} />
          
          <Route path='404' element={<NotFound />} />
          </Routes>
          </div>
)
};
         


export default App;
