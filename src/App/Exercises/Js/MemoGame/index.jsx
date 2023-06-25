import "./styles.css";
import { useEffect, useState } from "react";
import { GameView } from "./GameView/GameView";
import { MenuView } from "./MenuView/MenuView";
import { Playground } from "./Playuground/Playuground";

export function MemoGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [boardSize, setBoardSize] = useState();
  const [time, setTime] = useState(0);
  const [timeInterval, setTimeInterval] = useState();
  const [amount, setAmount] = useState(0);
  const [isGameEnded, setGameEnded] = useState(false);
  const [myTime, setMyTime] = useState(0);

  useEffect(() => {
    if (isGameStarted) {
      const gameInterval = setInterval(() => {
        return setTime((prev) => prev + 1);
      }, 1000);
      setTimeInterval(gameInterval);
    } else {
      clearInterval(timeInterval);
      setTime(0);
    }
  }, [isGameStarted]);

  console.log(boardSize);

  return (
    <div className="MemoGame">
      <h4>MEMO GAME</h4>
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      {isGameStarted ? (
        <GameView
          setGameStarted={setGameStarted}
          time={time}
          amount={amount}
          setAmount={setAmount}
        />
      ) : (
        <MenuView
          setGameStarted={setGameStarted}
          setBoardSize={setBoardSize}
          myTime={myTime}
          amount={amount}
          isGameEnded={isGameEnded}
          boardSize={boardSize}
          setAmount={setAmount}
          isGameStarted={isGameStarted}
        />
      )}
      {isGameStarted && (
        <Playground
          boardSize={boardSize}
          amount={amount}
          setAmount={setAmount}
          isGameEnded={isGameEnded}
          setGameEnded={setGameEnded}
          time={time}
          setGameStarted={setGameStarted}
          setTime={setTime}
          myTime={myTime}
          setMyTime={setMyTime}
        />
      )}
    </div>
  );
}
