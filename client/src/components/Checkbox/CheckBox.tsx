/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from "react";
import "./checkbox.scss";

const CheckBox = function () {
  const [currentAnswer, setCurrentAnswer] = useState<null | options>(null);
  const ref = useRef("");
  const checked = () => (ref.current = "checked");
  return (
    <div className="checkbox-container">
      <div className="checkboxes">
        <label className="flipBox">
          <input type="checkbox" />
          <span>Checkbox 1</span>
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

        <label className="flipBox">
          <input type="checkbox" />
          <span>Checkbox 2</span>
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

        <label className="flipBox">
          <input type="checkbox" />
          <span>Checkbox 3</span>
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

        <label className="flipBox">
          <input type="checkbox" disabled />
          <span>Disabled checkbox</span>
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

        <label className="flipBox">
          <input type="checkbox" />
          <span>Checkbox 4</span>
          <div className="flipBox_boxOuter">
            <div
              className={`flipBox_box ${ref.current}`}
              onClick={checked}
              ref!={ref}
            >
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
      </div>
    </div>
  );
};
export default CheckBox;
