  import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const AddPost = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      try {
         axios.post(
          `https://searchandoffer.onrender.com/api/add`,
          // { postType, title, category, content, Address, zipCode, image },
          { withCredentials: true }
        );
      } catch (error) {
        console.log(console.error);
      }
      
    }

    setValidated(true);
  };
  const [postData, setPostData] = useState({
    postType: "",
    title: "",
    category: "",
    content: "",
    Address: "",
    zipCode: "",
    image: "",
  });

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  

  const handleCancel = () => {
    // Perform cancel logic or navigate away
    console.log("Form canceled");
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Row className="mb-3">
    <Form.Group as={Col} md="4" controlId="validationCustom01">
      <Form.Label>I am </Form.Label> 
      <Form.Select aria-label="Default select example">
      <option>please select here</option>
      <option value="1">searching</option>
      <option value="2">offering</option>
      
      </Form.Select>
    </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="title"
          
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
      <Form.Label>Category type </Form.Label> 
      <Form.Select aria-label="Default select example">
      <option>select a category</option>
      <option value="1">Real Estate</option>
      <option value="2">Jobs</option>
      <option value="3">Electronics</option>
      <option value="4">Furniture</option>
      <option value="5">Pets</option>
      <option value="6">Vehicles</option>
      <option value="7">Services</option>
      <option value="8">Special offers</option>
      
    </Form.Select>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        <Form.Label>Username</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Row>
    <Row className="mb-5 ">
    <FloatingLabel controlId="floatingTextarea2" label="Please add your body of Ad">
        <Form.Control  md="4"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    </Row>
    <Form.Group className="mb-3">
      <Form.Check
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
        feedbackType="invalid"
      />
    </Form.Group>
    <Button type="submit">Submit form</Button>
  </Form>
  );
};

export default AddPost;
