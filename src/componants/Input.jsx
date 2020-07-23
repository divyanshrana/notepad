import React from "react";

class Input extends React.Component {
  constructor(props) {
    super();
  }
  handleClick = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      if (value.trim !== "") {
        this.props.enter(value);
        e.target.value = "";
      }
    }
  };
  render() {
    return <input className="input" onKeyDown={this.handleClick} />;
  }
}

export default Input;
