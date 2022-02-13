import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./checkbox.scss";
import isValidOption from "./helpers";

const CheckBox = function ({
  options,
  sendAns,
  displayAns,
  index,
  optionsAsCode,
}: CheckBoxProps) {
  const [optionSelected, setOptionSelected] = useState<Option>(0);

  useEffect(() => {
    setOptionSelected(displayAns || 0);
  }, [displayAns, options]);

  const chooseAns = (target: HTMLInputElement) => {
    const option = Number(target.name);
    if (isValidOption(option))
      setOptionSelected(option === optionSelected ? 0 : option);
  };
  return (
    <div className="checkbox-container">
      <div className="checkboxes">
        <label className="flipBox" htmlFor="option1">
          <input
            id="option1"
            name="1"
            type="checkbox"
            checked={optionSelected === 1}
            onClick={(e) => chooseAns(e.target as HTMLInputElement)}
          />
          <span>
            {optionsAsCode ? (
              <code style={{ fontFamily: "monospace" }}>{options[0]}</code>
            ) : (
              options[0]
            )}
          </span>
          <div className="flipBox_boxOuter">
            <div role="button" className="flipBox_box">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="flipBox_shadow" />
        </label>

        <label className="flipBox" htmlFor="option2">
          <input
            id="option2"
            name="2"
            type="checkbox"
            checked={optionSelected === 2}
            onClick={(e) => chooseAns(e.target as HTMLInputElement)}
          />
          <span>{options[1]}</span>
          <div className="flipBox_boxOuter">
            <div className="flipBox_box">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="flipBox_shadow" />
        </label>

        <label className="flipBox" htmlFor="option3">
          <input
            id="option3"
            type="checkbox"
            name="3"
            checked={optionSelected === 3}
            onClick={(e) => chooseAns(e.target as HTMLInputElement)}
          />
          <span>{options[2]}</span>
          <div className="flipBox_boxOuter">
            <div className="flipBox_box">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="flipBox_shadow" />
        </label>
        <label className="flipBox" htmlFor="option4">
          <input
            id="option4"
            name="4"
            type="checkbox"
            checked={optionSelected === 4}
            onClick={(e) => chooseAns(e.target as HTMLInputElement)}
          />
          <span>{options[3]}</span>
          <div className="flipBox_boxOuter">
            <div className="flipBox_box">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="flipBox_shadow" />
        </label>
        <div className="send-ans">
          <Button
            variant="contained"
            className="send-ans"
            style={{ backgroundColor: "green" }}
            disabled={!optionSelected}
            onClick={
              sendAns
                ? () => sendAns(optionSelected)
                : (e) => e.preventDefault()
            }
          >
            {index && index + 1 === 15 ? "Send Quiz" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CheckBox;
