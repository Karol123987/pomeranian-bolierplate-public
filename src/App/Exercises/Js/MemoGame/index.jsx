import './styles.css';
import { useState } from 'react';
import { GameView } from './GameView/GameView';
import { MenuView } from './MenuView/MenuView';
// import { useEffect } from 'react';
// import { Playground } from './Playuground/Playuground';

export function MemoGame() {
  const [isGameStarted, setGameStarted] = useState(false);

  return (
    <div className="MemoGame">
      <h4>MEMO GAME</h4>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      <MenuView />
      <GameView />
    </div>
  );
}
