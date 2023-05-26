import './styles.css';

const arrayOfMultipleTypes = [
  true,
  1,
  'Cześć to Rock In It',
  { karol: 'prusek' },
];

// OBIEKTY:
export const objectOfMultipleTypes = {
  maciej: { daneOsobowe: 'Jestem z Gdańska' },
  kursFe: 'react',
  kursFe1: 1,
  kursFe2: true,
  kursFe3: [],
  kursFe4: () => 'Lubie Vanilla JS',
};

var array2d = [1, [{ karol: 'prusek' }]];

const arrayOfNumbersParam = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayOfNumbersOne = [1, 2, 3];
const arrayOfNumbersTwo = [4, 5, 6];

export function Exercise() {
  const { kursFe, kursFe3 } = objectOfMultipleTypes;
  const [kursFe2] = arrayOfMultipleTypes;

  function filterMethod(arrayOfNumbersParam) {
    const greaterThan5 = arrayOfNumbersParam.filter(function (arrayNumber) {
      return arrayNumber > 5;
    });
    return console.log('filterMethod', greaterThan5);
  }
  filterMethod(arrayOfNumbersParam);

  function sameNumbers() {
    const arrayOfNumbersX = [1, 2, 3, 4, 5];
    const arrayOfNumbersY = [3, 5, 7, 9];

    const wspolne = arrayOfNumbersX.filter(function (element) {
      return arrayOfNumbersY.includes(element);
    });
    return console.log('sameNumbers', wspolne);
  }
  sameNumbers();

  function mergeObjects() {
    const object1 = { foo: 'bar' };
    const object2 = { name: 'Karol' };
    const resultOfMerging = { ...object1, ...object2 };

    console.log('mergeObjects', resultOfMerging);
    return resultOfMerging.name;
  }

  return (
    <div>
      <p>Metody na tablicach</p>
      {objectOfMultipleTypes.maciej.daneOsobowe}
      <br />
      {objectOfMultipleTypes.kursFe4()}
      <br />
      {objectOfMultipleTypes['maciej']['daneOsobowe']}
      <br />
      {mergeObjects()}
      <br />
      {kursFe}
      <br />
      Destrukturyzacja tablicy: {String(kursFe2)}
    </div>
  );
}
