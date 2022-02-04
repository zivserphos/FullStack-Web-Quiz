import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import setMarginBottom from "./helpers";

const ModalRow = function ({ question, i }: { question: Question; i: number }) {
  return (
    <Row
      className="review-question"
      style={{
        display: "flex",
        marginBottom: setMarginBottom(question.query.length),
      }}
    >
      <Col xs={12}>
        <b>
          <FontAwesomeIcon
            icon={question.isCorrect ? faCheck : faTimes}
            style={{
              color: question.isCorrect ? "green" : "red",
            }}
          />
        </b>
        <b>{`Q${i}. ${question.query}`}</b>
      </Col>
    </Row>
  );
};

export default ModalRow;
