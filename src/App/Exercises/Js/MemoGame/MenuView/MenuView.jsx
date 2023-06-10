import './MenuView.css';
import { Menu } from '../Menu/Menu';
import { Button } from '../Button/Button';
import { SelectButtonsMemo } from '../SelectButtonsMemo/SelectButtonsMemo';

export const MenuView = ({
  setAmount,
  setGameStarted,
  setBoardSize,
  myTime,
  amount,
  isGameEnded,
  isGameStarted,
  boardSize,
}) => {
  return (
    <>
      {isGameEnded && !isGameStarted && (
        <p>
          Gratulację! Twój wynik to {boardSize / 2} znalezionych par w czasie{' '}
          {myTime} sekund i w {amount} ruchów!
        </p>
      )}
      <Menu label="Liczba elementów">
        <SelectButtonsMemo
          setValue={setBoardSize}
          options={[
            {
              value: 8,
              content: '8 elementów',
              isActive: false,
            },
            {
              value: 16,
              content: '16 elementów',
              isActive: false,
            },
            {
              value: 20,
              content: '20 elementów',
              isActive: false,
            },
          ]}
        />
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button
          isControl={true}
          onClick={() => {
            setGameStarted(true);
            setAmount(0);
          }}
        >
          START
        </Button>
      </Menu>
    </>
  );
};
