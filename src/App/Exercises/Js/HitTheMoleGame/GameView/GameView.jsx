import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import './GameView.css';
import { useEffect } from 'react';

export const GameView = ({
  setGameStarted,
  score,
  setScore,
  setTime,
  time,
  setGameStopped,
  isGameStopped,
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      time > 0 && setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [time, setTime]);

  return (
    <>
      <Menu label="Czas do końca">
        <div className="value-field">{time}</div>
      </Menu>

      <Menu label="Wynik">
        <div className="value-field">{score}</div>
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => {
            setGameStarted(false);
            setGameStopped(true);
          }}
        >
          STOP
        </Button>
      </Menu>
    </>
  );
};
