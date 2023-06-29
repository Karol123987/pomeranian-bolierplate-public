import "./SingleTask.css";
import { ReactComponent as Kosz } from "../../../../Images/kosz.svg";
import { ReactComponent as Edit } from "../../../../Images/Edit.svg";
import { ReactComponent as Check } from "../../../../Images/Check.svg";

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
            <button
              className="button-delete"
              onClick={() => {
                deleteToDo(id);
              }}
            >
              <Kosz />
            </button>
          </div>
          <p>{author}</p>
          <button
            className="button-edit"
            onClick={() => {
              handleEditTask(id);
            }}
          >
            <Edit />
          </button>
          <p>{name}</p>
          <p>{note}</p>

          {!isDone && (
            <button
              className="button-check"
              onClick={() => {
                markAsDone(id);
              }}
            >
              <Check />
            </button>
          )}
          {isError && <p>Nie da się usunąć elementu</p>}
          {isDone && <p>Zakończone {parseDate(doneDate)}</p>}
        </div>
      </div>
    </div>
  );
}
