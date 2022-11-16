import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const AddNewActivityForm = (props) => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const nameChanged = (event) => {
    setName(event.target.value);
  };
  const descChanged = (event) => {
    setDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const val = {
      pattern_name: name,
      pattern_description: desc,
    };
    axios.post("http://localhost:8000/api/patterns/", val);

    setName("");
    setDesc("");
    nav('/training');
  };

  return (
    <Container className="shadow-lg p-3 bg-red rounded">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Training Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            value={name}
            onChange={nameChanged}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={desc}
            onChange={descChanged}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default AddNewActivityForm;