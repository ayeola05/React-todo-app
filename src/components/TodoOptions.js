import React from "react";
import TodoOption from "./TodoOption";

const TodoOptions = (props) => (
  <div>
    <button onClick={props.todoRemoveAll} disabled={!props.count}>
      Remove All Todos
    </button>
    {props.todos.map((todo) => (
      <TodoOption
        key={todo}
        option={todo}
        handleRemoveTodo={props.handleRemoveTodo}
      />
    ))}
  </div>
);

export default TodoOptions;
