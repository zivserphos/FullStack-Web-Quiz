/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import ModalRow from "./ModalRow";
import ModalQuestion from "./ModalQuestions";
import "./modal.scss";

const MydModalWithGrid = function (props: any) {
  const { questions } = useSelector((state: Quiz) => state);
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
          {questions
            ? questions.map((question: Question, i: number) => (
                <ModalRow question={question} i={i + 1} />
              ))
            : ""}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const MyModal = function () {
  const [modalShow, setModalShow] = useState(true);
  const { numOfCorrectAns } = useSelector((state: Quiz) => state);
  return (
    <div className="review-modal">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {`Results: ${numOfCorrectAns} / 15`}
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default MyModal;
