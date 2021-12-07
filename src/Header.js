import React, { Component } from "react";
import {
  Breadcrumb,
  Col,
  Container,
  Dropdown,
  Image,
  Row,
} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Container>
        <Row style={{ backgroundColor: "black" }}>
          <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              Pilih Bahasa
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Indonesia</Dropdown.Item>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Spain</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Col></Col> */}
          <Col xs={8}></Col>
          <Col>
            <Image src="/icon.png" width="50" height="50" roundedCircle />
            <p style={{ color: "white" }}>Alan Saputra</p>
          </Col>
        </Row>
        <Row>
          <Col sm={8}></Col>
          <Col sm={4}>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
              <Breadcrumb.Item href="/" active>
                Bola
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
