/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import "./modal.scss";

const MydModalWithGrid = function (props: any) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="review-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Results</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12}>
              .col-xs-12 <b>1</b> .col-md-8
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              .col-xs-12 <b>2</b>.col-md-8
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              .col-xs-12 <b>3</b>.col-md-8
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              .col-xs-12 <b>4</b>.col-md-8
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              .col-xs-12 <b>5</b>.col-md-8
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              .col-xs-12 <b>6</b>.col-md-8
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              .col-xs-12<b>7</b> .col-md-8
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              .col-xs-12 <b>8</b>.col-md-8
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              .col-xs-12<b>9</b> .col-md-8
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              .col-xs-12<b>10</b> .col-md-8
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const MyModal = function () {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="review-modal">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Results
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default MyModal;
