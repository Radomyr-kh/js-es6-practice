const maxInterv = (...args) => {
  let arr = [...args];
  return arr.reduce((max, elem, index, arr) => {
    let current = Math.abs(arr[index] - arr[index + 1]);
    if (current > max) {
      max = current;
    }
    return max;
  }, 0);
};

export default maxInterv;
