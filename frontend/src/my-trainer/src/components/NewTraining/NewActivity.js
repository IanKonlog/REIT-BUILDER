import React, {useState} from "react";
import { Button } from "react-bootstrap";
import ActivityForm from "./ActivityForm";

const NewActivity = props => {
    const [isEditing, setIsEditing] = useState(false);

    const saveActivitydataHandler = (enteredActivityData) =>{
       const activityData = {
        ...enteredActivityData,
        id: Math.random().toString()
       };
       props.onAddActivity(activityData);
       setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div >
            {!isEditing && <Button className="m-5" onClick={startEditingHandler}>Add New Activity</Button>}
            {isEditing && <ActivityForm onSaveActivityData={saveActivitydataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewActivity;