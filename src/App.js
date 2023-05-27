
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
import NavBar from './components/NavBar';
import Message from './components/Message'


import "bootstrap/dist/css/bootstrap.min.css";
import AddPost from './pages/AddPost';
import AllMessages from './components/AllMessages';


const  App  = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [gotCookie, setGotCookie] = useState(false);
  
  const url = 'https://searchandoffer.onrender.com/api/user/me'
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
    <>
       {/* < NavBar  isAuth={isAuth}
              setIsAuth={setIsAuth}
              setUser={setUser}
              setGotCookie={setGotCookie}/> */}
       <Routes>
        <Route path='/' element={
        <Layout
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              setUser={setUser}
              setGotCookie={setGotCookie} />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login isAuth={isAuth} setGotCookie={setGotCookie} />} />
          <Route path='/sing-up' element={<SignUp isAuth={isAuth} setGotCookie={setGotCookie} />} />
          <Route path='/add' element={<AddPost />} />
          <Route path='/messages' element ={< AllMessages />}    />
          <Route path='404' element={<NotFound />} />
          </Routes>
      </>
)
};
         


export default App;
