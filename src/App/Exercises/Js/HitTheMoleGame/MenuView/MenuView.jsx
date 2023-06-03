import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { SelectButtons } from '../SelectButtons/SelectButtons';
import './MenuView.css';

export const MenuView = ({ setGameStarted }) => {
  return (
    <>
      <Menu label="Czas gry">
        <SelectButtons
          options={[
            {
              label: '1 minuta',
              isActive: true,
              value: 1,
            },
            {
              label: '2 minuty',
              isActive: false,
              value: 2,
            },
            {
              label: '3 minuty',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>

      <Menu label="Liczba kretów">
        <SelectButtons
          options={[
            {
              label: '1 kret',
              isActive: true,
              value: 1,
            },
            {
              label: '2 krety',
              isActive: false,
              value: 2,
            },
            {
              label: '3 krety',
              isActive: false,
              value: 3,
            },
          ]}
        />
      </Menu>

      <Menu label="Przyciski sterujące">
        <Button onClick={() => setGameStarted(true)}>Start</Button>
      </Menu>
    </>
  );
};
