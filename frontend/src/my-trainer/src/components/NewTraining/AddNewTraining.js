import React, { useState } from "react";
import NewActivity from "./NewActivity"
import Activities from "./Activities"

let _ACTIVITIES = [];

const AddNewTraining = (props) => {
  
    const [activities, setActivities] = useState(_ACTIVITIES);

    const addActivityHandler = (activity) => {
        setActivities(previousActivities => {
            return [...activities, activity];
        });
    };

    return (
        <div>
            <NewActivity onAddActivity= {addActivityHandler}/>
            <Activities activities={activities} />
        </div>
    );

};

export default AddNewTraining;
