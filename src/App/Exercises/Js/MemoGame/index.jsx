import './styles.css';
import { useState } from 'react';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView';
import { Playground } from './Playuground/Playuground';

// import { useEffect } from 'react';

export function MemoGame() {
  const [isGameStarted, setGameStarted] = useState(false);

  return (
    <div className="MemoGame">
      <h4>MEMO GAME</h4>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      {isGameStarted ? (
        <GameView setGameStarted={setGameStarted} />
      ) : (
        <MenuView setGameStarted={setGameStarted} />
      )}
      {isGameStarted && <Playground />}
    </div>
  );
}
