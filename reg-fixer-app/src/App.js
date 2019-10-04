import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RegFixer from "./components/regFixer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>RegFixer</h1>
        </header>
        <RegFixer />
      </div>
    );
  }
}

export default App;
