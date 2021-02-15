import React from "react";
import HomePage from "./HomePage";
import TodoOptions from "./TodoOptions";
import AddTodo from "./AddTodo";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.todoRemoveAll = this.todoRemoveAll.bind(this);
    this.state = {
      todos: [],
    };
  }

  todoRemoveAll() {
    this.setState(() => {
      return {
        todos: [],
      };
    });
  }
  handleRemoveTodo(todoRemove) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((todo) => {
          return todoRemove !== todo;
        }),
      };
    });
  }
  handleAddTodo(e) {
    e.preventDefault();
    const option = e.target.elements.todo.value.trim();

    if (option) {
      this.setState((prevState) => {
        if (option)
          return {
            todos: prevState.todos.concat(option),
          };
      });
      e.target.elements.todo.value = "";
    }
  }
  render() {
    return (
      <div>
        <HomePage />
        <TodoOptions
          todos={this.state.todos}
          handleRemoveTodo={this.handleRemoveTodo}
          todoRemoveAll={this.todoRemoveAll}
          count={this.state.todos.length > 0}
        />
        <AddTodo handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default TodoApp;
