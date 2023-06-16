// import './styles.css';
// import React, { useState, useRef } from 'react';

// export function SavedInput() {
//   const [list, setList] = useState([]);
//   const inputRef = useRef(null);

//   const handleAddNick = () => {
//     const newNick = inputRef.current.value;
//     if (newNick) {
//       const newId = list.length + 1;
//       const newObject = {
//         nick: newNick,
//         id: newId,
//       };
//       setList((prevList) => [...prevList, newObject]);
//       inputRef.current.value = '';
//     }
//   };

//   const handleRemoveNick = (id) => {
//     setList((prevList) => prevList.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="mainClass">
//       <div className="nick">NICK</div>
//       <input className="input" placeholder="nick" type="text" ref={inputRef} />

//       <button className="buttonAdd" onClick={handleAddNick}>
//         DODAJ
//       </button>
//       <div className="nickList">
//         {list.map((item) => (
//           <div key={item.id} className="nickItem">
//             {item.nick}
//             <button
//               className="removeButton"
//               onClick={() => handleRemoveNick(item.id)}
//             >
//               X
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// ------------------------NOWY KOD------------------------------
import './styles.css';
import { useState } from 'react';

const initialListNick = JSON.parse(localStorage.getItem('list-nicki'));
const initialIdCounter = localStorage.getItem('idCounter');

export function SavedInput() {
  const [listNick, setListNick] = useState(
    initialListNick ? initialListNick : []
  );
  const [currentName, setCurrentName] = useState('');
  const [idCounter, setIdCounter] = useState(
    initialIdCounter && Number(initialIdCounter)
  );

  const sendToLocalStorage = (newList, count) => {
    const stringifyNickList = JSON.stringify(newList);

    localStorage.setItem('list-nicki', stringifyNickList);
    localStorage.setItem('idCounter', count);

    setIdCounter(count);
    setListNick(newList);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const inputNickValue = currentName;
    const newList = [...listNick, { nick: inputNickValue }];
    const count = idCounter + 1;

    sendToLocalStorage(newList, count);
    setCurrentName('');
  };

  const changeValue = (e) => {
    setCurrentName(e.target.value);
  };

  const deletePerson = (index) => {
    const newList = listNick.filter((_, idx) => idx !== index);
    setListNick(newList);
    sendToLocalStorage(newList, idCounter);
  };

  const handleFormKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementById('addButton').click();
    }
  };

  return (
    <div className="saved-input-container">
      <form onSubmit={addPerson} onKeyDown={handleFormKeyPress}>
        <div className="left-part">
          <div className="nick-input-row">
            <p>NICK</p>
            <input
              type="text"
              className="input-nick"
              placeholder="Podaj swój nick"
              autoFocus
              onChange={changeValue}
              value={currentName}
            />
          </div>
          <button type="submit" id="addButton">
            DODAJ
          </button>
        </div>
      </form>
      <div className="list">
        {listNick &&
          listNick.map((person, index) => {
            return (
              <div className="row-on-list">
                <div className="name-on-list">{person.nick}</div>
                <button
                  className="x-button"
                  onClick={() => deletePerson(index)}
                >
                  X
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
