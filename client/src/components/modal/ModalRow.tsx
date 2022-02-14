/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import setMarginBottom from "./helpers";

const ModalRow = function ({
  question,
  i,
  openQuestionInfo,
}: {
  question: Question;
  i: number;
  openQuestionInfo: any;
}) {
  return (
    <Row
      className="review-question"
      style={{
        display: "flex",
        marginBottom: setMarginBottom(question.query.length),
      }}
    >
      <div>
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
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="extra-info"
            onClick={() => openQuestionInfo(i)}
          />
        </Col>
      </div>
    </Row>
  );
};

export default ModalRow;
