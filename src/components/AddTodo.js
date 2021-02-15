import React from "react";

class AddTodo extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAddTodo}>
          <input type="text" name="todo" />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
