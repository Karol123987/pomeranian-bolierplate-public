import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import './GameView.css';

export const GameView = ({ setGameStarted }) => {
  return (
    <>
      <Menu label="Czas do końca">
        <div className="value-field">[czasss]</div>
      </Menu>

      <Menu label="Wynik">
        <div className="value-field">{2}</div>
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button
          onClick={() => {
            setGameStarted(false);
          }}
        >
          Stop
        </Button>
      </Menu>
    </>
  );
};
