import { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';

export function Exercise({ parameterToEffect }) {
  const [getState, setState] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Wykonuje operacje cykliczna...');
    }, 5000);

    //cleanup function inside useEffect
    return () => {
      clearInterval(timer);
      console.log('Zatrzymaj operacje cykliczna...Wykonuje clean up ');
    };
    //to posible options to kick useEffect and cause rerender of the component
  }, [parameterToEffect, getState]);

  return (
    <div className="playing-with-js-promises">
      <p>Promises</p>
    </div>
  );
}
