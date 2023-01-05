const getLanguages = (array, callback) => {
  if (callback) {
    array = array.filter(callback);
  }
  return array.reduce((newArr, obj) => {
    return [...newArr, ...obj.languages];
  }, []);
};

export default getLanguages;
