import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import logo from "./logo512.png";

//strony
import Glówna from "../Pages/Glówna";
import Patenty from "../Pages/Patent";
import Galeria from "../Pages/Galeria";
import Kontakt from "../Pages/Kontakt";
import Galary1 from "../Pages/Galary1";
import Galary2 from "../Pages/Galary2";
import Galary3 from "../Pages/Galary3";
import Patent1 from "../Pages/Patent1";
import Patent2 from "../Pages/Patent2";
import Info from "../Pages/infodoc";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          bg="info"
          variant="info"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="70"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/"> Glówna </Nav.Link>
                <Nav.Link href="/patenty"> Patenty </Nav.Link>
                <Nav.Link href="/galeria"> Galeria </Nav.Link>
                <Nav.Link href="/kontakty"> Kontakt </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
            <Routes>
                <Route path="/" element = {<Glówna/>} />
                <Route path="/patenty" element = {<Patenty/>} />
                <Route path="/galeria" element = {<Galeria/>} />
                <Route path="/kontakty" element = {<Kontakt/>} />
                <Route path="/galary1" element = {<Galary1/>} />
                <Route path="/galary2" element = {<Galary2/>} />
                <Route path="/galary3" element = {<Galary3/>} />
                <Route path="/patent2" element={<Patent2/>}/>
                <Route path="patent1" element={<Patent1/>}/>
                <Route path="/info" element={<Info/>}/>
            </Routes>
        </Router>

      </>
    );
  }
}
