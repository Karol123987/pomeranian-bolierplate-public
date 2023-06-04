import './GameView.css';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';

export const GameView = () => {
  return (
    <>
      <Menu label="czas gry">
        <button isDisable={true}>1:35</button>
      </Menu>
    </>
  );
};
