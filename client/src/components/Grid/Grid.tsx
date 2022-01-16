/* eslint-disable react/require-default-props */
import React, { FunctionComponent, ReactNode } from "react";
import cn from "classnames";
import styles from "./grid.module.scss";

const Grid: FunctionComponent<{
  children: ReactNode;
  item?: boolean;
  container?: boolean;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  spacing?: Spacing;
  alignItems?: AlignItems;
  justifyContent: JustifyContent;
}> = function ({
  children,
  container,
  item,
  xs,
  sm,
  md,
  lg,
  alignItems,
  spacing,
  justifyContent,
}) {
  const classNames = cn({
    [styles.Grid_container]: container,
    [styles.Grid_item]: item,
    [styles[`Grid_xs_${xs}`]]: xs,
    [styles[`Grid_xs_${sm}`]]: sm,
    [styles[`Grid_xs_${md}`]]: md,
    [styles[`Grid_xs_${lg}`]]: lg,
    [styles[`Grid_spacing_${spacing}`]]: spacing,
    [styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent,
    [styles[`Grid_alignItems_${alignItems}`]]: alignItems,
  });
  return <div className={classNames}>{children}</div>;
};

export default Grid;
