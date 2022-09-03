import React, { useState } from 'react';

const ToDoList = () => {
  const [toDo, setToDo] = useState([]);
  const [nextId, setNextId] = useState(2);
  const [inputText, setInputText] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextToDo = toDo.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setToDo(nextToDo);
    setInputText('');
  };

  const onRemove = (id) => {
    const nextToDo = toDo.filter((todo) => todo.id !== id);
    setToDo(nextToDo);
  };

  const newToDoList = toDo.map((todo) => (
    <li key={todo.id} onDoubleClick={() => onRemove(todo.id)}>
      {todo.text}
    </li>
  ));

  return (
    <div>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>Add Todo</button>
      <ul>{newToDoList}</ul>
    </div>
  );
};

export default ToDoList;
