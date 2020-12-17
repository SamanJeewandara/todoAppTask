import React from 'react';
import { Checkbox, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import './TodoList.scss';

const ToDoList = ({ todoItems }) => {

  return (
    <div className="form-check">
      <ul>
        {todoItems?.map((todoItem) =>
        <Row>
          <Checkbox />
           <li key={todoItem.id}>{todoItem.name}</li>
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