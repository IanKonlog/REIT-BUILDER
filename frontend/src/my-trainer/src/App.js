import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddNewTraining from "./components/NewTraining/AddNewTraining";

function App() {
  let routes;

  routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/training" element={<AddNewTraining />} />
    </Routes>
  );

  return (
    <div className="App">
      <Container>
        <main>{routes}</main>
      </Container>
    </div>
  );
}

export default App;
