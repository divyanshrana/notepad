import React from "react";
import "./field.css";
import logo from "./check.png";

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getImage: (status) => {
        if (status === "complete") {
          return (
            <img className="tick" height="15px" src={logo} alt="check"></img>
          );
        }
      },
    };
  }

  render() {
    return (
      <div className="todos">
        {this.props.data.map((todo) => (
          <li
            style={{
              textDecoration:
                todo.status === "complete" ? "line-through" : "none",
            }}
            key={todo.id}
            onClick={this.props.change(todo.id)}
          >
            {todo.text}
            {this.state.getImage(todo.status)}
          </li>
        ))}
      </div>
    );
  }
}
