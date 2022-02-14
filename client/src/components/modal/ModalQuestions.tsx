import React from "react";
import { Container, Modal, Button } from "react-bootstrap";
import CheckBox from "../Checkbox/CheckBox";

const ModalQuestion = function ({ question }: { question: Question }) {
  return (
    <Modal
      show
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen
      className="review-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Results</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <h1>{question?.query || ""}</h1>
          <h2>{question?.code || ""}</h2>
          <CheckBox options={question?.options || ""} displayAns={2} />
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalQuestion;
