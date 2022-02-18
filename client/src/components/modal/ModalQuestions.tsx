import React from "react";
import { Container, Modal, Button } from "react-bootstrap";
import CheckBox from "../Checkbox/CheckBox";

const ModalData = function ({
  question,
  onHide,
}: {
  question: Question;
  onHide: () => void;
}) {
  return (
    <Modal
      onHide={onHide}
      show
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="review-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Question/{question.isCorrect ? "correct" : "not correct"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {question.query.length > 200 ? (
            <h3>{question?.query || ""}</h3>
          ) : (
            <h1>{question?.query || ""}</h1>
          )}
          {question?.code && question.code.length > 200 ? (
            <h4>{question?.code || ""}</h4>
          ) : (
            <h2>{question?.code || ""}</h2>
          )}

          <CheckBox
            options={question?.options || ""}
            displayAns={2}
            asQuestion={false}
            correctAns={question.correctAns}
          />
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const ModalQuestion = function ({
  question,
  onHide,
}: {
  question: Question;
  onHide: () => void;
}) {
  return (
    <div className="review-modal">
      <ModalData onHide={onHide} question={question} />
    </div>
  );
};
export default ModalQuestion;
