import './GameView.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';

export const GameView = ({ setGameStarted }) => {
  return (
    <>
      <Menu label="czas gry">
        <Button isDisable={true}>1:35</Button>
      </Menu>
      <Menu label="liczba ruchów">
        <Button isDisable={true}>2</Button>
      </Menu>
      <Menu label="przyciski sterujące">
        <Button isDisable={true} onClick={() => setGameStarted(false)}>
          STOP
        </Button>
      </Menu>
    </>
  );
};
