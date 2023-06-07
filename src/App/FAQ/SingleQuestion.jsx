import './styles.css';
import React from 'react';
import { useState } from 'react';
import { ReactComponent as Vector } from '../Components/Icons/Vector.svg';

export const SingleQuestion = (props) => {
  const question = props.question;
  const answer = props.answer;

  const [isTrue, setIsTrue] = useState(true);

  const clickHandler = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div className="box">
      <h3 className="naglowek">
        <button
          className={`buttonFaq ${isTrue ? 'rotated' : ''}`}
          onClick={clickHandler}
        >
          <Vector className="imageFaq" />
        </button>
        <button
          className={`buttonFaqText ${isTrue ? 'open' : ''}`}
          onClick={clickHandler}
        >
          {question}
        </button>
      </h3>
      <hr className="line" />
      <p className="answer">{!isTrue && answer}</p>
    </div>
  );
};
