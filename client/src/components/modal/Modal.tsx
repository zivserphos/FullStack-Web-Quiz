/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import ModalQuestion from "./ModalQuestions";
import "./modal.scss";

const MydModalWithGrid = function (props: any) {
  const a: Question = {
    query: " Q29. Who does an audit committee report to?",
    options: [
      " external auditors",
      " senior management",
      " board of directors",
      " union of employee representatives",
    ],
    correctAns: 1,
  };
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
          <Row className="review-question">
            <Col xs={12}>
              <b>
                <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
              </b>
              <b>{a.query}</b>
              <Button type="button" style={{ backgroundColor: "green" }}>
                Review question
              </Button>
            </Col>
          </Row>
          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12 <b>2</b>.col-md-8
            </Col>
          </Row>

          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12 <b>3</b>.col-md-8
            </Col>
          </Row>

          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12 <b>4</b>.col-md-8
            </Col>
          </Row>

          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12 <b>5</b>.col-md-8
            </Col>
          </Row>

          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12 <b>6</b>.col-md-8
            </Col>
          </Row>

          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12<b>7</b> .col-md-8
            </Col>
          </Row>

          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12 <b>8</b>.col-md-8
            </Col>
          </Row>

          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12<b>9</b> .col-md-8
            </Col>
          </Row>

          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12<b>10</b> .col-md-8
            </Col>
          </Row>
          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12<b>11</b> .col-md-8
            </Col>
          </Row>
          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12<b>12</b> .col-md-8
            </Col>
          </Row>
          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12<b>13</b> .col-md-8
            </Col>
          </Row>
          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12<b>14</b> .col-md-8
            </Col>
          </Row>
          <Row className="review-question">
            <Col xs={12}>
              .col-xs-12<b>15</b> .col-md-8
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

const MyModal = function ({ display }: { display: boolean }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setModalShow(display);
  }, [display]);
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
