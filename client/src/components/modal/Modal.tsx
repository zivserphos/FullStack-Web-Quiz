/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import ModalRow from "./ModalRow";
import "./modal.scss";
import ModalQuestion from "./ModalQuestions";

const MydModalWithGrid = function (props: ModalProps) {
  const [extraInfo, setExtraInfo] = useState<number | null>(null);
  const { questions, numOfCorrectAns } = useSelector((state: Quiz) => state);

  // const changeExtraInfo = (i: number) => setExtraInfo(i);
  return extraInfo ? (
    <ModalQuestion question={questions[extraInfo]} />
  ) : (
    // <ModalQuestion question={questions[extraInfo]} />
    <Modal
      animation
      {...props}
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
                <ModalRow
                  question={question}
                  i={i + 1}
                  openQuestionInfo={setExtraInfo}
                />
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
  const onHide = () => setModalShow(false);

  return (
    <div className="review-modal">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {`Results: ${numOfCorrectAns} / 15`}
      </Button>

      <MydModalWithGrid show={modalShow} onHide={onHide} />
    </div>
  );
};

export default MyModal;
