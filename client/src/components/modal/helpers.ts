const setMarginBottom = (querylength: number): string =>
  querylength > 120 ? `${(querylength - 120) / 30 + 1}rem` : `1rem`;

export default setMarginBottom;
