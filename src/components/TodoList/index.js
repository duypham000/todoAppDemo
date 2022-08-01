import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { todosRemainingSelector } from '../../redux/selectors';
import todoListSlice from './todoSlice';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [prioriry, setPrioriry] = useState('Medium');
  const dispath = useDispatch();

  const todoList = useSelector(todosRemainingSelector);
  const handleAddBtnClick = () => {
    dispath(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: prioriry,
        complete: false,
      }),
    );

    setTodoName('');
    setPrioriry('Medium');
  };

  const handlePrioriryChange = (value) => {
    setPrioriry(value);
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => {
          return (
            <Todo name={todo.name} prioriry={todo.priority} key={todo.id} completed={todo.complete} todoId={todo.id} />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={prioriry} onChange={handlePrioriryChange}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddBtnClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
