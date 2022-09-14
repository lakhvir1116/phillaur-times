import * as React from "react";
// import { Container, Row, Col, Carousel } from "react-bootstrap";
import AllRoutes from "./route/route";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./assets/scss/style.scss";

const App = () => {
  return (
    <>
      <AllRoutes />
      <h1>Index Page</h1>
    </>
  );
};

export default App;
