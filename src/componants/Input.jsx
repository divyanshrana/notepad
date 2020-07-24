import React from "react";
import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super();
  }
  handleClick = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      if (value.trim()) {
        this.props.enter(value);
        e.target.value = "";
      }
    }
  };
  render() {
    return (
      <input
        type="text"
        placeHolder="   Enter your todos here"
        className="input"
        onKeyDown={this.handleClick}
      />
    );
  }
}

export default Input;
