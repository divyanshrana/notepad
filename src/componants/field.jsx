import React from "react";
import "./field.css";

export default class Field extends React.Component {
  constructor(props) {
    super();
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
          </li>
        ))}
      </div>
    );
  }
}
