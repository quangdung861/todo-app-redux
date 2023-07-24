import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
// import { addTodoAction } from "../../redux/actions";
import todoListSlice, { addTodos } from "./todosSlice";
import { todosRemainingSelector } from "../../redux/selectors";
import { addNewTodo } from "./todosSlice";

export default function TodoList() {
  const dispatch = useDispatch();

  const todoList = useSelector(todosRemainingSelector);

  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddTodo = () => {
    dispatch(
      addNewTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );
    // dispatch(
    //   todoListSlice.actions.addTodo({
    //     id: uuidv4(),
    //     name: todoName,
    //     completed: false,
    //     priority: priority,
    //   })
    // );
    // dispatch(
    //   addTodos({
    //     id: uuidv4(),
    //     name: todoName,
    //     completed: false,
    //     priority: priority,
    //   })
    // );

    setTodoName("");
    setPriority("Medium");
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList?.map((todo) => {
          return (
            <Todo
              key={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
              id={todo.id}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
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
          <Button type="primary" onClick={() => handleAddTodo()}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
