import React from 'react';
import './styles.css';

export function Exercise() {
  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );

  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );

  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );

  //-----------------------------------------------------

  const handlePromiseAll = async () => {
    try {
      const results = await Promise.all([fetchDataFast(), fetchDataLong()]);
      console.log(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePromiseAllWithError = async () => {
    try {
      const results = await Promise.all([
        fetchDataFast(),
        fetchDataLong(),
        fetchDataError(),
      ]);
      console.log(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePromiseAllSettled = async () => {
    try {
      const results = await Promise.allSettled([
        fetchDataFast(),
        fetchDataLong(),
      ]);
      console.log(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePromiseAllSettledWithError = async () => {
    try {
      const results = await Promise.allSettled([
        fetchDataFast(),
        fetchDataLong(),
        fetchDataError(),
      ]);
      console.log(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePromiseAny = async () => {
    try {
      const result = await Promise.any([fetchDataFast(), fetchDataLong()]);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePromiseAnyWithError = async () => {
    try {
      const result = await Promise.any([
        fetchDataFast(),
        fetchDataLong(),
        fetchDataError(),
      ]);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePromiseRace = async () => {
    try {
      const result = await Promise.race([
        fetchDataFast(),
        fetchDataLong(),
        fetchDataError(),
      ]);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePromiseRaceWithError = async () => {
    try {
      const result = await Promise.race([fetchDataLong(), fetchDataError()]);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="button-promises">
      <button onClick={handlePromiseAll}>
        Promise.all (fetchDataFast, fetchDataLong)
      </button>
      <button onClick={handlePromiseAllWithError}>
        Promise.all (fetchDataFast, fetchDataLong, fetchDataError)
      </button>
      <button onClick={handlePromiseAllSettled}>
        Promise.allSettled (fetchDataFast, fetchDataLong)
      </button>
      <button onClick={handlePromiseAllSettledWithError}>
        Promise.allSettled (fetchDataFast, fetchDataLong, fetchDataError)
      </button>
      <button onClick={handlePromiseAny}>
        Promise.any (fetchDataFast, fetchDataLong)
      </button>
      <button onClick={handlePromiseAnyWithError}>
        Promise.any (fetchDataFast, fetchDataLong, fetchDataError)
      </button>
      <button onClick={handlePromiseRace}>
        Promise.race (fetchDataFast, fetchDataLong, fetchDataError)
      </button>
      <button onClick={handlePromiseRaceWithError}>
        Promise.race (fetchDataLong, fetchDataError)
      </button>
    </div>
  );
}
