import React from "react";

const TodoOption = (props) => (
  <div>
    {props.option}
    <button
      onClick={(e) => {
        props.handleRemoveTodo(props.option);
      }}
    >
      Remove
    </button>
  </div>
);

export default TodoOption;
