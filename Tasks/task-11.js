const createComposition =
  (...array) =>
  (data) => {
    return array.reduce((prev, current) => {
      return current(prev);
    }, data);
  };

export default createComposition;
