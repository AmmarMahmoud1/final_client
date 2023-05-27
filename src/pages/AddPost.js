  import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const AddPost = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { status } = await axios.post(
        `https://searchandoffer.onrender.com/api/add`,
        // { postType, title, category, content, Address, zipCode, image },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(console.error);
    }
  };

  const handleCancel = () => {
    // Perform cancel logic or navigate away
    console.log("Form canceled");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="my-5 d-flex align-items-center flex-column w-50 m-auto"
    >
      <Form.Group controlId="postType" className="row mb-3">
        <Form.Label className="text-dark col-4">PostType :</Form.Label>
        <div className="col">
          <Form.Control
            type="text"
            name="postType"
            value={postData.postType}
            onChange={handleChange}
            placeholder="type"
          />
        </div>
      </Form.Group>

      <Form.Group controlId="title" className="row mb-3">
        <Form.Label className="text-dark col-4">Title :</Form.Label>
        <div className="col">
          <Form.Control
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
            placeholder="title"
          />
        </div>
      </Form.Group>

      <div className="col-auto mb-3">
        <Dropdown>
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            className="px-3 my-1"
          >
            Select
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Offer</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Search</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Form.Group controlId="content" className="row mb-3">
        <Form.Label className="text-dark col-4">Content :</Form.Label>
        <div className="col">
          <Form.Control
            as="textarea"
            name="content"
            value={postData.content}
            onChange={handleChange}
            placeholder="content"
          />
        </div>
      </Form.Group>

      <Form.Group controlId="Address" className="row mb-3">
        <Form.Label className="text-dark col-4">Address :</Form.Label>
        <div className="col">
          <Form.Control
            type="text"
            name="Address"
            value={postData.Address}
            onChange={handleChange}
            placeholder="address"
          />
        </div>
      </Form.Group>

      <Form.Group controlId="zipCode" className="row mb-3">
        <Form.Label className="text-dark col-4">Zip Code :</Form.Label>
        <div className="col">
          <Form.Control
            type="text"
            name="zipCode"
            value={postData.zipCode}
            onChange={handleChange}
            placeholder="code"
          />
        </div>
      </Form.Group>

      <Form.Group controlId="image" className="mb-3 row">
        <Form.Label className="text-dark col-4">Image URL :</Form.Label>
        <div className="col">
          <Form.Control
            type="file"
            name="image"
            value={postData.image}
            onChange={handleChange}
            placeholder="image URL"
          />
        </div>
      </Form.Group>

      <div className="col">
        <Button className="flex-row bg-white">
          <Button variant="primary" type="submit" className="me-3 fs-6">
            Submit
          </Button>
          <Button variant="danger" onClick={handleCancel} className="px-3 fs-6">
            Cancel
          </Button>
        </Button>
      </div>
    </Form>
  );
};

export default AddPost;
