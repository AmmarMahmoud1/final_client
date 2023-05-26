import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Message() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="my-5 d-flex align-items-center flex-column w-50 m-auto"
    >
      <Form.Group controlId="name" className="row mb-3">
        <Form.Label className="text-dark col-4">Name :</Form.Label>
        <div className="col">
          <Form.Control required type="text" name="text" placeholder="Name" />
        </div>
      </Form.Group>

      <Form.Group controlId="text" className="row mb-3">
        <Form.Label className="text-dark col-4">Message :</Form.Label>
        <div className="col">
          <Form.Control as="textarea" name="textarea" placeholder="msg" />
        </div>
      </Form.Group>

      <Button type="submit" className="mt-1">
        Submit msg
      </Button>
    </Form>
  );
}

export default Message;
