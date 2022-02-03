/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import ModalRow from "./ModalRow";
import "./modal.scss";

const MydModalWithGrid = function ({
  onHide,
  show,
}: {
  onHide: () => void;
  show: boolean;
}) {
  const { questions, numOfCorrectAns } = useSelector((state: Quiz) => state);
  return (
    <Modal
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="review-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {`Results: ${numOfCorrectAns}/15`}
        </Modal.Title>
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
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const MyModal = function () {
  const [modalShow, setModalShow] = useState(true);
  const { numOfCorrectAns } = useSelector((state: Quiz) => state);
  const onHide = () => setModalShow(false);

  return (
    <div className="review-modal">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {`Results: ${numOfCorrectAns} / 15`}
      </Button>

      <MydModalWithGrid onHide={onHide} show={modalShow} />
    </div>
  );
};

export default MyModal;
