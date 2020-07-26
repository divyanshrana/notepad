import React from "react";
import App from "./App.js";
import "./Main.css";

let index = 1;
class Main extends React.Component {
  state = {
    custom: [{ comp: App, index: 1, show: true }],
  };
  addTodo = () => {
    //this.state.custom.push({ comp: App, index: ++index });
    this.state.custom.splice(0, 0, { comp: App, index: ++index, show: true });
    this.setState({
      custom: this.state.custom,
    });
  };
  deleteComp = (ind) => {
    this.state.custom.map((Component) => {
      if (Component.index === ind) {
        Component.show = false;
      }
      return 0;
    });
    console.log(this.state.custom);
    this.setState({
      custom: this.state.custom,
    });
  };
  render() {
    return (
      <div>
        <button className="Add" onClick={this.addTodo}>
          +
        </button>
        <div className="Components">
          {this.state.custom.map((Component) => {
            if (Component.show === true) {
              return (
                <Component.comp
                  key={Component.index}
                  del={this.deleteComp}
                  title={Component.index}
                />
              );
            }
            return <div></div>;
          })}
        </div>
      </div>
    );
  }
}

export default Main;
