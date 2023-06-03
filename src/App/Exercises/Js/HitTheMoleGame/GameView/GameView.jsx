import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import './GameView.css';
import { useEffect, useState } from 'react';

export const GameView = ({ setGameStarted, score, setScore }) => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      counter > 0 && setCounter(counter - 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [counter]);

  return (
    <>
      <Menu label="Czas do końca">
        <div className="value-field">{counter}</div>
      </Menu>

      <Menu label="Wynik">
        <div className="value-field">{score}</div>
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => {
            setGameStarted(false);
            setScore(0);
          }}
        >
          Stop
        </Button>
      </Menu>
    </>
  );
};
