import React from "react";
import "./App.css";
import Input from "./componants/Input.jsx";
import Field from "./componants/field.jsx";

let index = 4;
class App extends React.Component {
  state = {
    todos: [
      { text: "wash", id: 1, status: "active" },
      { text: "shop", id: 2, status: "complete" },
      { text: "steal", id: 3, status: "active" },
    ],
    filter: "All",
  };
  addToList = (value) => {
    this.setState({
      todos: [
        { text: value, id: index++, status: "active" },
        ...this.state.todos,
      ],
    });
  };
  changeStatus = (id) => (ev) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === "active" ? "complete" : "active",
            }
          : todo
      ),
    });
  };
  applyFilter = (filter) => (ev) => {
    this.setState({
      filter: filter,
    });
  };
  getTodos = () => {
    switch (this.state.filter) {
      case "active": {
        return this.state.todos.filter((todo) => todo.status === "active");
      }
      case "complete": {
        return this.state.todos.filter((todo) => todo.status === "complete");
      }
      default: {
        return this.state.todos;
      }
    }
  };
  render() {
    return (
      <div className="App">
        <div className="todo">
          <h1>TODO</h1>
          <Input enter={this.addToList} />
          <Field data={this.getTodos()} change={this.changeStatus} />
          <button onClick={this.applyFilter("all")}>All</button>
          <button onClick={this.applyFilter("active")}>Active</button>
          <button onClick={this.applyFilter("complete")}>Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
