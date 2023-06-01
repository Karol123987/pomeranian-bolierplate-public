import './styles.css';
import React from 'react';

export function Exercise() {
  // ZADANIE 1 (SORTOWANIE TABLICY)

  const orginalArr = [1, 3, 2];
  const sortedArr = sortImmune(orginalArr);

  function sortImmune(lista) {
    return [...lista].sort();
  }

  // ZADANIE 2 (OPCJA_1) (ZMIANA WIELKOŚCI PIERWSZEJ LITERY Z MAŁEJ NA WIELKA )
  const originalObject = {
    name: 'john',
    surname: 'wick',
    age: '1000',
  };

  const upperObject = (object) => {
    const helperObject = {};
    for (const property in object) {
      const propertyToString = object[property].toString();
      const helperValue = propertyToString[0];
      helperObject[property] =
        helperValue.toUpperCase() + propertyToString.slice(1);
    }
    return helperObject;
  };
  const changedObject = upperObject(originalObject);
  console.log(changedObject, originalObject);

  // ZADANIE 2 (OPCJA_2)
  const upperObject2 = (obj) => {
    const changedObject = {};
    Object.keys(originalObject).forEach((key) => {
      const helperString = String(originalObject[key]);
      changedObject[key] =
        helperString.charAt(0).toUpperCase() + helperString.slice(1);
    });
    return changedObject;
  };
  console.log(upperObject2(originalObject), originalObject);

  // ZADANIE 3
  const tablicaPierwotna = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1] },
    { id: 1, name: 'Eve 1', grades: [3, 2, 4, 2, 1] },
  ];

  //(OPCJA 1)

  function calcAvr(tablicaPierwotna) {
    const tablicaWynikowa = tablicaPierwotna.map((item) => {
      const average =
        item.grades.reduce((acc, curr) => acc + curr, 0) / item.grades.length;
      return { id: item.id, name: item.name, average };
    });

    return tablicaWynikowa;
  }

  const tablicaWynikowa = calcAvr(tablicaPierwotna);
  console.log(tablicaPierwotna, tablicaWynikowa);

  // ZADANIE 3 (OPCJA 2)

  const tablicaPierwotna2 = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1] },
    { id: 1, name: 'Eve 1', grades: [3, 2, 4, 2, 1] },
  ];
  const calcAvr2 = (peopleArr) => {
    const returnArr = [];
    peopleArr.forEach((person) => {
      let sum = 0;
      let avr = 0;
      person.grades.forEach((num) => (sum += num));
      avr = sum / person.grades.length;
      returnArr.push({ id: person.id, name: person.name, avr });
    });
    return returnArr;
  };
  const tablicaWynikowa2 = calcAvr2(tablicaPierwotna2);
  console.log(tablicaPierwotna2, tablicaWynikowa2);

  // ZADANIE 4

  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  console.log(fibonacci(3));
  console.log(fibonacci(12));

  // ZADANIE 5

  function sumOfParam(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] === 'number' && !isNaN(args[i])) {
        total += args[i];
      } else {
        return 'złe wejście';
      }
    }
    return total;
  }

  console.log(sumOfParam(1, 2, 3, 4, 5, 6));
  console.log(sumOfParam(1, 2, 3, 'not a number', 5, 6));

  // ZADANIE 6

  function ZliczWystapienia(element) {
    return function (...args) {
      let count = 0;
      for (let i = 0; i < args.length; i++) {
        if (args[i] === element) {
          count++;
        }
      }
      if (count === 0) {
        return 'złe wejście';
      } else {
        return count;
      }
    };
  }

  const countOne = ZliczWystapienia(1);
  console.log(countOne(1, 1, 2, 3, 5, 7, 8, 1));
  console.log(countOne(1, 1, 1, 2, 3, 'cokolwiek', {}, [], 1));

  const countNotANumber = ZliczWystapienia('nie liczba');
  console.log(countNotANumber(1, 1, 2, 3, 5, 7, 8, 1));

  return (
    <div>
      Funkcje w JS
      <div>{orginalArr.join('-')}</div>
      <div>{sortedArr.join('-')}</div>
      <div>
        {'originalObject: ' +
          originalObject.name +
          ' ' +
          originalObject.surname}
      </div>
      <div>
        {'changedObject: ' + changedObject.name + ' ' + changedObject.surname}
        <br />
        {'ZAD 5 ---> ' + sumOfParam(1, 2, 3, 4, 5, 6)}
        <br />
        {Object.entries(originalObject).map(([key, value]) => (
          <p key={key}>{`${key}: ${value}`}</p>
        ))}
      </div>
    </div>
  );
}
