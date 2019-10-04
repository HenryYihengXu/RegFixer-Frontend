import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import face from "./face.jpg";
import logo from "./logo.svg";
import "./App.css";
import RegFixer from "./components/regFixer";
import Menu from "./components/menu";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={face} className="App-logo" alt="logo" />
          <h1>RegFixer</h1>
        </header>

        <div className="row">
          <div className="col-2">
            <Route path="/" component={Menu} />
          </div>
          <div className="col">
            <Switch>
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/regfixer" component={RegFixer} />
              <Redirect from="/" exact to="/regfixer" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
