import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import ExistingTrainings from "./ExistingTrainings"
import AddNewActivityForm from "./UI/AddNewActivityForm";
import Navigationbar from "./UI/Navigationbar"


const Home = props =>{
    const [listOfTrainings, setListOfTrainings] = useState([]);

    const trainingHandler = () => {
      axios
        .get("http://localhost:8000/api/patterns/")
        .then((response) => {
          setListOfTrainings([...response.data.trainings]);
          console.log(listOfTrainings);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      trainingHandler();
    }, []);
  
  
    return (
      <div className="App">
        <Navigationbar />
        <Container>
          <h1 className="text-primary mb-5">
            Welcome to the Training Builder Tool
          </h1>
          <ExistingTrainings />
  
          <h2>Create A New Training</h2>
          <AddNewActivityForm />
  
        </Container>
      </div>
    );
};

export default Home;







