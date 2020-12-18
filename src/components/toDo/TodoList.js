import React from 'react';
import { Checkbox, Row } from 'antd';
import PropTypes from 'prop-types';
import { CloseCircleOutlined } from '@ant-design/icons';
import './TodoList.scss';

const ToDoList = ({ todoItems, setTodoItems }) => {

  const onChange = (todoItem) => {
    const newTodoItems = todoItems.filter((item) => item.id !== todoItem);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="form-check">
      <ul>
        {todoItems?.map((todoItem) =>
        <Row>
          <Checkbox />
           <li key={todoItem.id}>{todoItem.name}</li>
           <CloseCircleOutlined onClick={() => onChange(todoItem.id)}/>
           </Row>
           )}
      </ul>
    </div>
  );
};

ToDoList.propTypes = {
  todoItems: PropTypes.array.isRequired,
};

export default ToDoList;