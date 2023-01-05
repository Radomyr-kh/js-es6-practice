export const negate = function (x) {
  return -x;
};

export const halve = function (x) {
  return x / 2;
};

export const square = function (x) {
  return x * x;
};

export const double = function (x) {
  return 2 * x;
};

const combineFunctions =
  (...arr) =>
  (data) =>
    arr.reduce((accumulator, current) => current(accumulator), data);

export default combineFunctions;
