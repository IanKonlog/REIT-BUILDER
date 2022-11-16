import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ActivityItem = (props) => {
  const convertToTime = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(11, 19);
  };

  return (
    <li>
      <Card style={{ width: "18rem" }} key={props.position} className="mb-4 shadow-lg p-3 bg-white rounded">
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Time: {convertToTime(props.time * 60)}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </li>
  );
};

export default ActivityItem;
