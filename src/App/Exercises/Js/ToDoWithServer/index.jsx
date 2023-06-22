import { useEffect } from 'react';
import './styles.css';
import { ToDoElement } from './TODO';
import { useState } from 'react';
const API_URL = 'http://localhost:3333/api';

export function Exercise() {
  const [data, setData] = useState([]);
  const [errorList, setErrorList] = useState([]);

  const getData = async () => {
    const resp = await fetch(`${API_URL}/todo`);
    const jsonData = await resp.json();
    console.log(jsonData, 'to dane z serwera');
    setData(jsonData);
  };

  const deleteToDo = async (id) => {
    console.log('sprawdzanie funkcji');
    const response = await fetch(`${API_URL}/todo/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    });
    const { status } = await response;
    if (status === 200) {
      getData();
    } else if (status === 500 || status === 404) {
      console.log('status 400 lub 500');
      setErrorList((prevErrorList) => [...prevErrorList, id]);
      console.log(errorList, 'newErrorList');
    }
  };

  // const data = [
  //   {
  //     id: 8,
  //     title: 'Todo 8',
  //     note: 'notatka 1',
  //     author: 'Karol1',
  //     isDone: false,
  //   },
  //   {
  //     id: 9,
  //     title: 'Todo 9',
  //     note: 'notatka 2',
  //     author: 'Karol2',
  //     isDone: false,
  //   },
  //   {
  //     id: 10,
  //     title: 'Todo 10',
  //     note: 'notatka 3',
  //     author: 'Karol3',
  //     isDone: false,
  //   },
  // ];

  useEffect(() => {
    console.log(errorList, 'newErrorListUseEffect');
  }, [errorList]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p className="todopar">Tutaj znajdziesz listę swoich zadań.</p>
      {data.map((element) => {
        const isError = errorList.includes(element.id);
        return (
          <ToDoElement
            title={element.title}
            author={element.author}
            note={element.note}
            deleteToDo={deleteToDo}
            id={element.id}
            isError={isError}
          />
        );
      })}
    </div>
  );
}
