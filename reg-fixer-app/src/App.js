import React, { Component } from "react";
import face from "./face.jpg";
import "./App.css";
import RegFixer from "./components/regFixer";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import RegisterForm from "./components/registerForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
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
