import React, { useState } from 'react';
import ToDoList from './TodoList';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';
import './ToDo.scss';
import '../styles/main.css'

function ToDo() {

  const [newTodo, setNewTodo] = useState('');
  const [todoItems, setTodoItems] = useState([]);

const addNewTask = () => {
  setTodoItems([...todoItems, { id: newTodo, name: newTodo }]);
  setNewTodo('');
}

  return (
    <div className="card">
      <h1 className="text-blue-400">
        TODO
      </h1>
      <h2 className="text-blue-400">
        Add Your Task
      </h2>
      <Input className="input" value={newTodo} onChange={(event) => {
        setNewTodo(event.target.value);
      }}/>
      <Button className="button" onClick={addNewTask}>
        ADD
      </Button>
      <h2 className="text-blue-400">
        Today's Task List
      </h2>
      <ToDoList
       todoItems={todoItems}
       setTodoItems={setTodoItems}
        />
     </div>
  );
}

ToDo.propTypes = {
  newTodo: PropTypes.string,
  todoItems: PropTypes.array,
};

export default ToDo;