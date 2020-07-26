import React from "react";
import "./App.css";
import Input from "./componants/Input.jsx";
import Field from "./componants/field.jsx";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

let index = 4;
const FadeIn = styled.div`
  animation: 1.2s ${keyframes`${fadeIn}`};
`;
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
      search: "",
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
      filter,
    });
  };
  searchTodos = (todos, search) => {
    return todos.filter((todo) => todo.text.indexOf(search) !== -1);
  };
  filterTodos = (todos, filter) => {
    switch (filter) {
      case "active": {
        return todos.filter((todo) => todo.status === "active");
      }
      case "complete": {
        return todos.filter((todo) => todo.status === "complete");
      }
      default: {
        return todos;
      }
    }
  };
  getTodos = () => {
    return this.searchTodos(
      this.filterTodos(this.state.todos, this.state.filter),
      this.state.search
    );
  };

  render() {
    return (
      <FadeIn>
        <div className="App">
          <div className="todo">
            <div
              className="cross"
              onClick={() => this.props.del(this.props.title)}
            >
              X
            </div>
            <div className="title">
              <input
                type="text"
                className="titleInput"
                placeholder={"Enter Title " + this.props.title}
              ></input>
              <span className="focus-border"></span>
            </div>
            <div className="buttons">
              <button className="all" onClick={this.applyFilter("all")}>
                All
              </button>
              <button className="active" onClick={this.applyFilter("active")}>
                Todo/Active
              </button>
              <button onClick={this.applyFilter("complete")}>Completed</button>
              <input
                type="text"
                placeholder="search"
                className="search"
                value={this.state.search}
                onChange={(e) => {
                  this.setState({ search: e.target.value });
                }}
              ></input>
            </div>
            <Input enter={this.addToList} />
            <Field todos={this.getTodos()} change={this.changeStatus} />
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default App;
