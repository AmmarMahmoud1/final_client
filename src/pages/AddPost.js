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
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="container mt-5">
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
        <Form.Label>Price</Form.Label>
        <InputGroup>
          
          <Form.Control
            type="text"
            placeholder="Price"
            aria-describedby="inputGroupPrepend"
            
          />
          
        </InputGroup>
      </Form.Group>
    </Row>
    <Row className="mb-5 ">
    <Form.Label>Please specify your ad down here:</Form.Label>
    <FloatingLabel controlId="floatingTextarea2" label="ad content here">
        <Form.Control  md="4"
          as="textarea"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Form.Group as={Col} md="8" className="mt-3" controlId="validationCustomUsername">
        <Form.Label>Upload Images</Form.Label>
        <InputGroup >
          
          <Form.Control
          
            type="file"
            placeholder="add image"
            aria-describedby="inputGroupPrepend"
            required
          />
        </InputGroup>
      </Form.Group>
    </Row>
    <Row>
    <Form.Group className="mt-3"  as={Col} md="4" controlId="validationCustomUsername">
        <Form.Label>Address</Form.Label>
        <InputGroup hasValidation>
          
          <Form.Control
            type="text"
            placeholder="Your address"
            aria-describedby="inputGroupPrepend"
          />
          <Form.Control.Feedback type="invalid">
            Please add your address.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group as={Col} md="4" className="mt-3" controlId="validationCustomUsername">
        <Form.Label>Zip code</Form.Label>
        <InputGroup hasValidation>
          
          <Form.Control
            type="text"
            placeholder="zip code"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group as={Col} md="4" className="mt-3" controlId="validationCustomUsername">
        <Form.Label>City</Form.Label>
        <InputGroup hasValidation>
          
          <Form.Control
          
            type="text"
            placeholder="City"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please add your city.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Row>
    <Row className="flex-row justify-content-end mt-5 ">
    <Button as={Col} md="2" className="mt-3" type="submit">Add New</Button>
    <Button type="reset" variant="secondary" as={Col} md="2" className="mt-3 btn-back" ><a className="btn-back" href="/">Back</a> </Button>
    </Row>
  </Form>
  );
};

export default AddPost;
