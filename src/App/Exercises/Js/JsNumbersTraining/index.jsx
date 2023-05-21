import './styles.css';

// ZADANIE 1 cz.A:

export function Exercise() {
  // let age = 18;
  // let hasDriverLicense = true;
  // let hasCar = true;

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18 && hasDriverLicense && hasCar) {
      return 'You can drive your car';
    } else if (!hasCar) {
      return 'You can drive a rental car';
    } else if (!hasDriverLicense) {
      return "You can't drive without a driver's license.";
    } else {
      return 'You are too young to drive';
    }
  }

  // ZADANIE 1 cz.B:

  function hasEnough(hasEnough) {
    if (!hasEnough) {
      return 'false';
    } else {
      return 'true';
    }
  }

  // ZADANIE 2:
  // var tekst = 'abcde';

  function isStringShort(tekst) {
    var liczbaLiter = tekst.length;
    if (liczbaLiter < 10) {
      return 'true';
    } else {
      return 'false';
    }
  }

  // ZADANIE 3:
  function circleArea(promien) {
    var pole = Math.PI * Math.pow(promien, 2);
    return pole;
  }

  // ZADANIE 4:
  function zmianaLiczbyNaOcene(liczba) {
    if (liczba === 1) {
      return 'niedostateczna';
    } else if (liczba === 2) {
      return 'dopuszczająca';
    } else if (liczba === 3) {
      return 'dostateczna';
    } else if (liczba === 4) {
      return 'dobra';
    } else if (liczba === 5) {
      return 'bardzo dobra';
    } else if (liczba === 6) {
      return 'celująca';
    } else {
      return 'złe wejście';
    }
  }

  // ZADANIE 5:
  const numbers = [4, 7];

  function ownMax(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }

  // ZADANIE 6:
  function sumFloat(number1, number2) {
    const sum1 = number1 + number2;
    const sum2 = Number(sum1.toFixed(4));

    return sum2;
  }

  return (
    <div>
      <p>Zad.1 cz.A</p>
      {canDrive(18, true, true)}

      <p>Zad.1 cz.B</p>
      {hasEnough(true)}

      <p>Zad.2</p>
      {isStringShort('abcde')}

      <p>Zad.3</p>
      {circleArea(3)}

      <p>Zad.4</p>
      {zmianaLiczbyNaOcene(6)}

      <p>Zad.5</p>
      {ownMax(numbers)}

      <p>Zad.6</p>
      {sumFloat(3.141592, 2.141595)}
    </div>
  );
}
