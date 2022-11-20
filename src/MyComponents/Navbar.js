
import React from 'react';
import PropTypes from "prop-types";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";      //to add CSS Styling of bootstrap components



function NavigationBar(props) {

    return (

        <Navbar bg={ props.useMode==='light'? 'light' : "dark" } variant={ props.useMode==='light'? 'light' : "dark"} expand="lg">
            <Navbar.Brand style={{ marginLeft: "10px" }}> { props.title } </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/"> Home </Nav.Link>
                    <Nav.Link href="/about"> About </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Form>
                <Form.Check type="switch"  style={{ marginRight: "10px" }} label={ props.useMode==='light'? 'Enable Dark Mode' : "Disable Dark Mode"} onClick={ props.toggler }/>
            </Form>
    </Navbar>
  );
}


NavigationBar.propTypes = {
    title: PropTypes.string,
    useMode: PropTypes.string,
}


export default NavigationBar;


