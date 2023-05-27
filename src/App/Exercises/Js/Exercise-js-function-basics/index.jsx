import './styles.css';

export function Exercise() {
  const a = 2;
  const b = 3;

  //Declaration type 1
  function multiplyTypeFunction(a, b) {
    return a * b;
  }

  const multiplyTypeArrowFunction = () => {
    return a * b;
  };

  //Lambda
  const multiplyTypeArrowFunction_lambda = () => a * b;

  const filterHelper = (num) => {
    return (num) => 3;
  };

  const filterHelper_lambda = (num) => {
    return (num) => 3;
  };

  const array_anonymous_function_with_declaration = [1, 2, 3].filter(
    (num) => num >= 3
  );
  const array_function_with_declaration = [1, 2, 3].filter((num) =>
    filterHelper(num)
  );

  function outsideFunction() {
    function insideFunction() {
      console.log('test');
    }
    // !!! wywołanie funkcji
    return insideFunction();
    //!!! zwracamy zmienną do której jest przypisana ta funkcja - przekazujemy referencje do tej funkcji
    // return insideFunction
  }
  outsideFunction();

  // ----------------------------------------------------------------------------------------------------------------
  // ARGUMENTY FUNKCJI:
  // function multiplyTypeFunctionNew1(x, y, z) {
  //   return x * y * z;
  // }

  // function multiplyTypeFunctionNew1(...values) {
  //   //!!! values jako lista z wartościami
  //   return values;
  // }

  // function multiplyTypeFunctionNew2(callback, val1, ...values) {
  //   //!!! values jako lista z wartościami
  //   callback1()
  //   callback2()
  //   return values;
  // }
  // multiplyTypeFunctionNew2(() => {console.log('1')}, () => {console.log('1'),1,2,3,4,5,6,7,8,9})

  //--------------------
  // const l1 = 1;
  // const l2 = 1;

  // console.log(l1 === l2);  -----> TRUE

  //-------------------
  // const obj1 = {}  //..gdzieś w pamięci mamy zadeklarowany obiekt
  // const obj2 = {}  //..gdzieś w pamięci mamy zadeklarowany obiekt

  // console.log(obj1 === obj2) ------> FALSE

  //----------------------------------------------------------------------------------------

  function outsideFunction_hosting() {
    let a = 1;
    function insideFunction() {
      let a = 2;
      console.log(a);
    }
    console.log(a);
    return insideFunction();
  }
  outsideFunction_hosting();

  return (
    <div>
      {/* DEKLARACJE FUNKCJI */}
      <div>{multiplyTypeFunction(a, b)}</div>
      <div>{multiplyTypeArrowFunction(a, b)}</div>
      {/* WYWOŁANIE FUNKCJI ANONIMOWEJ: */}
      <div>
        {() => {
          return a * b;
        }}
      </div>
    </div>
  );
}
