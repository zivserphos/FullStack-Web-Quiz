/* eslint-disable react/require-default-props */
import React, { FunctionComponent, ReactNode } from "react";
import cn from "classnames";
import "./grid.scss";

const Grid: FunctionComponent<{
  children: ReactNode;
  item?: boolean;
  container?: boolean;
  cols?: Cols;
}> = function ({ children, container, item, cols }) {
  return <div className="grid">{children}</div>;
};

export default Grid;
