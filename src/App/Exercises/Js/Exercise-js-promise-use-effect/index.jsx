// import { useEffect, useState } from 'react';
// import './styles.css';

// export function Exercise() {
//   const [getState, setState] = useState(null);

//   useEffect(() => {
//     const myPromise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("I'm resolved :)");
//       }, 5000);
//     });

//     myPromise.then((result) => {
//       setState(result);
//       console.log('Stan: fulfilled');
//       console.log('Promise zakonczyny sukcesem');
//     });
//   }, []);

//   return (
//     <div>
//       <p>{getState}</p>
//     </div>
//   );
// }

// -------- Powyżej mój działający kod--------------------

import { useEffect, useState } from 'react';
import './styles.css';

export function Exercise() {
  const [getMessage, setMessage] = useState('');
  const [getCount, setCount] = useState(0);

  useEffect(() => {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("I'm resolved :)");
      }, 5000);
    });

    myPromise
      .then((result) => {
        setMessage(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getCount]);

  const handleIncrementing = () => setCount(getCount + 1);

  return (
    <div>
      <button onClick={handleIncrementing}>Click Me!!</button>
      <p>{getMessage}</p>
      <p>{getMessage}</p>
      <p>{getMessage}</p>
    </div>
  );
}
