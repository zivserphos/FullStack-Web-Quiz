const setMarginBottom = (querylength: number): string =>
  querylength > 120 ? `${(querylength - 120) / 30 + 1.5}rem` : `1.5rem`;

export default setMarginBottom;
