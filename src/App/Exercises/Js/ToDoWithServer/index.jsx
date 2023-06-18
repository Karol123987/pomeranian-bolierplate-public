import { useState } from 'react';
import './styles.css';

export function Exercise() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Zamówić catering',
      person: 'Karol ',
      data: '18.06.2023, 11:50',
      note: 'Dla mnie wege, dla Pauliny ryba + wege. Zrobić zamówienie, zapłacić.',
      completed: false,
    },
    {
      id: 2,
      title: 'Kupić spray na kleszcze',
      person: 'Karol ',
      data: '18.06.2023, 11:50',
      note: 'Pamiętać, żeby sprawdzić skład i termin ważności preparatu. Zadzwonić do weta, żeby się upewnić, czy mają na stanie.',
      completed: false,
    },
    {
      id: 3,
      title: 'Szczepienie kitku',
      person: 'Karol ',
      data: '18.06.2023, 11:50',
      note: 'Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz szczepiona i umówić się z naszym weterynarzem.',
      completed: false,
    },
  ]);

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h3>TODO</h3>
      <div>
        <ul className="list_todo">
          {todos.map((todo) => (
            <li className="box_todo" key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCheckboxChange(todo.id)}
                />
                {todo.title}
                {todo.person}
                {todo.data}
                {todo.note}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
