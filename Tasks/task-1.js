export default function getModifiedArray(array) {
  let localArray = [...array];
  localArray[0] = 'Start';
  localArray[localArray.length - 1] = 'End';
  return localArray;
}
