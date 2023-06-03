import './styles.css';
import { useState } from 'react';
import { GameView } from './GameView/GameView';
import { Playground } from './Playuground/Playuground';
import { MenuView } from './MenuView/MenuView';

// TODO:
// - gdy timer = 0 -> koniec gry
// - możliwość wyboru czasu (1min. 2min. 3min)
// - komponent do wyświetlania wyniku
// - na kliknięciu stop - pokaż wyniki i zakończ gre

export function HitTheMoleGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div className="hit-the-mole">
      <h4>Hit The Mole</h4>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>

      {isGameStarted ? (
        <GameView
          setGameStarted={setGameStarted}
          score={score}
          setScore={setScore}
        />
      ) : (
        <MenuView setGameStarted={setGameStarted} />
      )}
      {/* <ResultView result={result} /> */}
      {isGameStarted && <Playground score={score} setScore={setScore} />}
    </div>
  );
}
