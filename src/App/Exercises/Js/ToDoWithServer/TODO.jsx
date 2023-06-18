import './TODO.css';
// import { TickIcon } from '../../../Components/Icons/TickIcon';

export const ToDoElement = ({
  title,
  note,
  author,
  isDone,
  deleteToDo,
  id,
  isError,
}) => {
  return (
    <div className="proba">
      <div>
        <div className="todo-containers">
          <div>
            <p className="boxpar">{title}</p>
            <p className="name_date">{author}</p>
            <p className="parinfo">{note}</p>
            {isError && <p>Ne da się usunąć elementu</p>}
            <button onClick={() => deleteToDo(id)}>Usuń</button>
          </div>
        </div>
      </div>
    </div>
  );
};
