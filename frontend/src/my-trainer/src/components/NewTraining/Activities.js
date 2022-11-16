import React from "react";
import ActivityItem from "./ActivityItem";
import { Button } from "react-bootstrap";

const Activities = (props) => {
  if (props.activities.length === 0) {
    return <h2 className="expenses-list__fallback">No Activity Listed</h2>;
  }
  return (
    <div className="mb-4">
      <ul className="list-unstyled">
        {props.activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            position={activity.activity_position}
            name={activity.activity}
            time={activity.activity_time}
          />
        ))}
      </ul>
      <Button className="m-5" variant="danger" onClick={startEditingHandler}>Cancel</Button>
      <Button className="m-5" variant="primary" onClick={startEditingHandler}>Create Training</Button>
    </div>
  );
};

export default Activities;
