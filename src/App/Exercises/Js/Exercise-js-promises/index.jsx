import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';

export function Exercise({ parameterToEffect }) {
  // const [getState, setState] = useState(null);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log('Wykonuje operacje cykliczna...');
  //   }, 5000);

  //   //cleanup function inside useEffect
  //   return () => {
  //     clearInterval(timer);
  //     console.log('Zatrzymaj operacje cykliczna...Wykonuje clean up ');
  //   };
  //   //to posible options to kick useEffect and cause rerender of the component
  // }, [parameterToEffect, getState]);

  // //nowe ćwiczenie:

  function logPromisesState(promise) {
    promise
      .then(() => {
        //success
        console.log('Stan: fulfilled');
        console.log('Promise zakonczyny sukcesem');
      })
      .catch(() => {
        //failed
        console.log('Stan: rejected');
        console.log('Promise zakonczyny błedem');
      })
      .finally(() => {
        //nevermind, I will do this
        console.log('Stan: fulfilled/rejected');
        console.log('Promise zakonczyny.');
      });
  }

  const myPromise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve();
      } else {
        rejected();
      }
    }, 5000);
  });

  logPromisesState(myPromise);

  return (
    <div className="playing-with-js-promises">
      <p>Promises</p>
    </div>
  );
}
