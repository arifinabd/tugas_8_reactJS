import React, { Component } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Jumbotron,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
class ContentBawah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleClose() {
    this.setState(() => {
      return {
        show: false,
      };
    });
  }

  handleOpen() {
    this.setState(() => {
      return {
        show: true,
      };
    });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Liga Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={6}>
            <Jumbotron>
              <h1>DIVISI PRIMERA</h1>
              <p>Main Untuk Catalunya Gerard Pique Minta Dihormati</p>
              <Button variant="primary">Read More</Button>
            </Jumbotron>
          </Col>
          <Col>
            <center>
              <Image src="/icon.png" width="50" height="50" roundedCircle />
              <h4>Silahkan Login</h4>
            </center>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Masukan Email" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Masukan Password" />
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Term & Condition" />
              </Form.Group>
              <Button variant="primary" onClick={this.handleOpen}>
                Login
              </Button>

              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>Anda Berhasil Login</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={this.handleClose}>
                    Save Username & Password
                  </Button>
                  <Button variant="danger" onClick={this.handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContentBawah;
