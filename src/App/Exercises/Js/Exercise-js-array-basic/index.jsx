import './styles.css';

const arrayOfMultipleTypes = [
  true,
  1,
  'Cześć to Rock In It',
  { karol: 'prusek' },
];

// TESTOWA TABLICA 2D:
var array2d = ['test1', ['test2']];

const arrayOfNumbers = [1, 2, 3, 4, 5];

const arrayOfNumbersOne = [1, 2, 3];
const arrayOfNumbersTwo = [4, 5, 6];

export function Exercise() {
  function getValueByIndex(array) {
    return console.log('getValueByIndex', array[0]);
  }
  getValueByIndex(arrayOfMultipleTypes);

  function shiftElementOfArray(arrayParam) {
    return console.log('shiftElementOfArray', arrayParam.shift());
  }
  shiftElementOfArray(arrayOfNumbers);

  function popElementOfArray(arrayParam) {
    return console.log('popElementOfArray', arrayParam.pop());
  }
  popElementOfArray(arrayOfNumbers);

  function pushElementToArray(arrayPush) {
    const internalArray = [];
    internalArray.push('Cześć JS jest bardzo intuicyjny');
    return console.log(internalArray);
  }
  pushElementToArray(arrayOfMultipleTypes);

  function concatArrays(arrayNumberOne, arrayNumberTwo) {
    const newArray = [].concat(arrayNumberOne, arrayNumberTwo);
    return console.log('concatArrays', newArray);
  }
  concatArrays(arrayOfNumbersOne, arrayOfNumbersTwo);

  function spreadTwoArrays() {
    const a = [1, 2, 3];
    const b = [4, 5, 6];

    return console.log('spreadTwoArrays', [...a, ...b]);
  }
  spreadTwoArrays();

  function forLoop() {
    for (let count = 0; count <= 5; count++) {
      console.log(count);
    }
  }
  forLoop();

  function whileLoop() {
    let whileCount = 0;

    while (whileCount <= 5) {
      console.log('whileLoop', whileCount);
      whileCount++;
    }
  }
  whileLoop();

  function whileLoopWithBreak() {
    let whileCount = 0;

    while (whileCount <= 10) {
      console.log('whileLoopWithBreak', whileCount);
      if (whileCount === 5) {
        break;
      }
      whileCount++;
    }
  }
  whileLoopWithBreak();

  return (
    <div>
      <p>Definiowanie funkcji - tablice w konsoli</p>
    </div>
  );
}
