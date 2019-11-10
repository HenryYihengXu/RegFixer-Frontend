import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import RegFixer from "./components/regFixer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { blue, grey } from "@material-ui/core/colors";
import NotFound from "./components/notFound";

//this.props.history.push("/movies");

class App extends Component {
  render() {
    return (
      <div className="App" /*style={{ backgroundColor: grey[900] }}*/>
        <AppBar position="relative" style={{ backgroundColor: blue[500] }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              <i className="fa fa-wrench" aria-hidden="true"></i>
              {" RegFixer"}
            </Typography>
          </Toolbar>
        </AppBar>
        <RegFixer />
      </div>
    );
  }
}

export default App;
