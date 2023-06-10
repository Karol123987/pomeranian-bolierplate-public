import './GameView.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';

export const GameView = ({ setGameStarted, time, amount, setAmount }) => {
  return (
    <>
      <Menu label="czas gry">
        <Button isDisable={true}>{time}</Button>
      </Menu>
      <Menu label="liczba ruchów">
        <Button isDisable={true}>{amount} </Button>
      </Menu>
      <Menu label="przyciski sterujące">
        <Button
          isDisable={true}
          onClick={() => {
            setGameStarted(false);
            setAmount(0);
          }}
        >
          STOP
        </Button>
      </Menu>
    </>
  );
};
