// import { useSelector } from "react-redux";
// import "./styles.css";

// // export function Redux() {
// // PRZYKŁADOWE POBIERANIE STANU APLIKACJI Z PIERWSZEJ IMPLEMENTACJI:
// // const testValue = useSelector((state) => {
// //   console.log(state, "store aplikacji w ćwiczeniu Reduxa");

// //   return state?.storeTest?.value ?? "Not working";
// // });

// // return (
// //   <div>
// //     <p>Redux</p>
// {
//   /* <dix>{testValue} - yay wyświetlam stan naszego Store'a !!!</dix> */
// }
// {
//   /* </div>
//   );
// } */
// }

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../../../../Store/slices/counterSlice";

export function Redux() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [incrementValue, setIncrementValue] = useState("1");

  const handleAdd = () => dispatch(increment());
  const handleDec = () => dispatch(decrement());
  const handleSubVal = () => dispatch(incrementByValue(incrementValue));
  const hadleIncByVal = (event) => {
    const value = event.target.value;

    setIncrementValue(value);
  };

  return (
    <div>
      <div>Nasz count: {count}</div>

      <button onClick={handleAdd}>Dodaj</button>
      <button onClick={handleDec}>Odejmij</button>
      <input onChange={hadleIncByVal} type="text" value={incrementValue} />
      <button onClick={handleSubVal}>Dodaj {incrementValue}</button>
    </div>
  );
}
