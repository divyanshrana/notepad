import React from "react";
import "./App.css";
import Input from "./componants/Input.jsx";
import Field from "./componants/field.jsx";

let index = 4;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "wash", id: 1, status: "active" },
        { text: "shop", id: 2, status: "complete" },
        { text: "steal", id: 3, status: "active" },
      ],
      filter: "All",
      colors: ["red", "blue", "green"],
    };
  }

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
          <div className="title">
            <input
              type="text"
              className="titleInput"
              placeholder={"Enter Title " + this.props.title}
            ></input>
            <span className="focus-border"></span>
          </div>
          <div className="buttons">
            <button onClick={this.applyFilter("all")}>All</button>
            <button onClick={this.applyFilter("active")}>Todo/Active</button>
            <button onClick={this.applyFilter("complete")}>Completed</button>
          </div>
          <Input enter={this.addToList} />
          <Field data={this.getTodos()} change={this.changeStatus} />
        </div>
      </div>
    );
  }
}

export default App;
