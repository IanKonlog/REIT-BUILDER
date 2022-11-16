import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

const ActivityForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [_activitites, set_Activities] = useState([]);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const activityData = {
      activity: enteredName,
      activity_time: +enteredTime,
    };

    props.onSaveActivityData(activityData);
    setEnteredName("");
    setEnteredTime("");
  };

  const getActivities = () => {
    axios
      .get(`http://localhost:8000/api/activity/`)
      .then((response) => {
        console.log(response.data);
        set_Activities([...response.data]);
        console.log(_activitites);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Training Name</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={enteredName}
            onChange={nameChangeHandler}
          >
            <option>Select Activity</option>
            {_activitites.map((activity) => (
              <option>{activity.activity_name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="number"
            placeholder="Time in mins"
            value={enteredTime}
            onChange={timeChangeHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default ActivityForm;
