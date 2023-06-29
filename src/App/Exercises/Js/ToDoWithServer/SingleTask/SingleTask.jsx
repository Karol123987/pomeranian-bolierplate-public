import "./SingleTask.css";
import { ReactComponent as Kosz } from "../../../../Images/kosz.svg";

import { parseDate } from "../helpers.js";

export function SingleTask(props) {
  const {
    name,
    author,
    note,
    title,
    deleteToDo,
    id,
    isError,
    handleEditTask,
    markAsDone,
    isDone,
    doneDate,
  } = props;

  return (
    <div className="task-index-page">
      <div className="task-list">
        <div className="task-single">
          <div className="task-row-title">
            <h3>{title}</h3>
          </div>
          <p>{author}</p>
          <p>{name}</p>
          <p>{note}</p>
          {isError && <p>Nie da się usunąć elementu</p>}
          <button
            className="button-delete"
            onClick={() => {
              deleteToDo(id);
            }}
          >
            <Kosz />
          </button>
          <button
            onClick={() => {
              handleEditTask(id);
            }}
          >
            EDYTUJ
          </button>
          {!isDone && (
            <button
              onClick={() => {
                markAsDone(id);
              }}
            >
              ZAKOŃCZ
            </button>
          )}
          {isDone && <p>Zakończone {parseDate(doneDate)}</p>}
        </div>
      </div>
    </div>
  );
}
