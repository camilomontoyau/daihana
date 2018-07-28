import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Micomponente = ({ name }) => <div>hola mundo {name}</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  state = {
    mostrar: false,
    value: ""
  };

  onClick() {
    this.setState({ mostrar: !this.state.mostrar });
  }

  render() {
    return (
      <div className="App">
        <input type="text" />
      </div>
    );
  }
}

export default App;
