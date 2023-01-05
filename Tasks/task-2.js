export default function filterNums(array, number = '0', parameter = 'greater') {
  return array.filter((int) => {
    return parameter === 'greater' ? int > number : int < number;
  });
}
