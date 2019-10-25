import React, { Component } from "react";
import "./App.css";
import RegFixer from "./components/regFixer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="relative" style={{ backgroundColor: blue[500]}}>
          <Toolbar>
            <Typography variant="h6" color = "#cccccc" noWrap>
              <i class="fa fa-wrench" aria-hidden="true"></i>{" RegFixer"}
            </Typography>
          </Toolbar>
        </AppBar>
        <RegFixer />
      </div>
    );
  }
}

export default App;
