import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

const TrainingList = (props) => {
  const [listOfActivities, setlistOfActivities] = useState([]);

  const activityHandler = () => {
    console.log(`Training id in Train list is ${props.training_id}`);
    axios
      .get(`http://localhost:8000/api/training/${props.training_id}`)
      .then((response) => {
        console.log(response.data);
        console.log(props.training_id);
        setlistOfActivities([...response.data]);
        console.log(listOfActivities);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const convertToTime = (seconds) => {
    if (seconds < 3600) {
      return new Date(seconds * 1000).toISOString().substring(14, 19);
    }
    return new Date(seconds * 1000).toISOString().substring(11, 16);
  };

  useEffect(() => {
    activityHandler();
  }, []);

  return (
    <Container>
      {listOfActivities.map((activity) => (
        <Card style={{ width: "18rem" }} key={activity.activity_position} className = "mb-4">
          <Card.Body>
            <Card.Title>{activity.activity_position}-{activity.activity}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Time: {convertToTime(activity.activity_time)}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </Container>
  );
};

export default TrainingList;
