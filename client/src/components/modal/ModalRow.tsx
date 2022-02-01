import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const ModalRow = ({
  question,
  i,
  isCorrect,
}: {
  question: Question;
  i: number;
  isCorrect: boolean;
}) => {
  <Row className="review-question" style={{ display: "flex" }}>
    <Col xs={12}>
      <b>
        <FontAwesomeIcon
          icon={isCorrect ? faCheck : faTimes}
          style={{ color: isCorrect ? "green" : "red" }}
        />
      </b>
      <b>{`Q${i}. ${question.query}`}</b>
      <button type="button">.col-md-8</button>
    </Col>
  </Row>;
};

export default ModalRow;
