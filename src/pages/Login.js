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

function Login({ setGotCookie }) {
// function Login({ isAuth, setGotCookie }) {

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


  const handleSubmit = (event) =>
  {
    event.preventDefault();
     axios
    .post('https://searchandoffer.onrender.com/api/user/login', {...state},{withCredentials: true})
    .then(response => {
        setResult(response.data);
        setStatus(response.status);
        console.log(response.status +"response");
        setState({ email :'' , password: ''});
        
    })
    .catch(() => {
        setResult({success:false , message: 'something is wrong'})
    })
      
    if (status ===200) { setGotCookie(true);}
    else (toastError('No cookie from server'))
   
  }
          
 

    
   
  
// useEffect(()=>{
//   if (isAuth) return <Navigate to='/' />;
// },[isAuth])
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