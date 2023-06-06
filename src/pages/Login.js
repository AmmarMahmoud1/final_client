import { useState,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toastError } from '../lib/toastError';

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login({ isAuth, setGotCookie }) {

  const navigate = useNavigate();
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState();




  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });

    
  
  };
  console.log({...state});


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://searchandoffer1.onrender.com/api/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify({ ...state })
      });
    
      if (response.status === 200) {
        setGotCookie(true);
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setResult(data);
          setStatus(response.status);
          setState({ email: '', password: '' });
        } else {
          throw new Error('Invalid JSON response');
        }
      } else {
        toastError('No cookie from server');
        setResult({ success: false, message: 'something is wrong' });
      }
    } catch (error) {
      console.error(error);
      setResult({ success: false, message: 'something is wrong' });
    }
  };
          
 

    
   
  
useEffect(()=>{
  if (isAuth) return <Navigate to='/' />;
},[isAuth])
  return (
    <form onSubmit={handleSubmit}>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' name="email" value={state.email}   onChange={onInputChange}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name="password" value={state.password}  onChange={onInputChange}/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" on>Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="/sign-up">Register</a></p>
      </div>

    </MDBContainer>
    </form>
  );
}

export default Login;