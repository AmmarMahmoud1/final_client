import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { toastError } from '../lib/toastError';


function SignUp({ isAuth, setGotCookie }) {

    const [{ name, email, password }, setForm] = useState({
       
        name: '',
        email: '',
        password: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const { status } = await axios.post(
            'https://searchandoffer.onrender.com/api/user/register',
            { name, email, password },
            { withCredentials: true }
          );
          if (status === 201) setGotCookie(true);
        } catch (error) {
          toastError(error.message || 'No cookie back');
        }
      };


  return (
    <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your username" onChange={handleChange} />
        <Form.Text className="text-muted">
         Your name as it will appear in your posts
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SignUp;