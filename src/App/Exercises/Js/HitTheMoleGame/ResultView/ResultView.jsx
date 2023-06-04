import React from 'react';

export const Result = ({ score, time }) => {
  return (
    <>
      <h2>
        Gratulacje! Twój wynik to {score} złapane krety w czasie {time}
      </h2>
    </>
  );
};
