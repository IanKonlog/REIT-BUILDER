import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Modal } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import TrainingList from "./TrainingList";

const ExistingTrainings = (props) => {
  const [listOfTrainings, setListOfTrainings] = useState([]);
  const [trainingId, setTrainingId] = useState();
  const [show, setShow] = useState(false);
  let randomId = -1;

  const trainingHandler = () => {
    axios
      .get("http://localhost:8000/api/patterns/")
      .then((response) => {
        setListOfTrainings([...response.data.trainings]);
        console.log(listOfTrainings);
      })
      .catch((error) => {
        console.log(error);
        Alert.error(error);
      });
  };

  const onSeeTraining = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setTrainingId(event.target.value);
    randomId = event.target.value;
    setShow(true);
    console.log(`training Id is ${randomId}`);
  };

  const handleClose = () => setShow(false);


  useEffect(() => {
    trainingHandler();
  }, []);

  return (
    <div>
      <h2 className="mb-3">Existing Trainings</h2>
      <Accordion className="mb-5 shadow-lg p-3 bg-red rounded">
        {listOfTrainings.map((training) => (
          <Accordion.Item eventKey={training.id} key={training.id}>
            <Accordion.Header>{training.pattern_name}</Accordion.Header>
            <Accordion.Body>
              {training.pattern_description}
              <br />
              <Button
                className="mt-2"
                onClick={onSeeTraining}
                value={training.id}
              >
                {" "}
                See Training{" "}
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>List of Activities</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <TrainingList training_id={trainingId} />
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary disabled" onClick={handleClose}>
              Use Training
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
};

export default ExistingTrainings;
