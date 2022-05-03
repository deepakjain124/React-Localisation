import "./App.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ComboBox from "../src/components/components/ComboBox";
import Label from "../src/components/components/Label";
import TextInput from "../src/components/components/input";
import TextInputs from "../src/components/components/TextArea";
import CheckBox from "../src/components/components/CheckBox";
import CalenderControl from "../src/components/components/calender";
import "bootstrap/dist/css/bootstrap.min.css"
import Local from "./Local";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  return (
    <>
     <Header/>
     <Home/>
     <Footer/>
    </>
  );
}

export default App;