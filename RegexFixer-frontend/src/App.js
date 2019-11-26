import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import RegFixer from "./components/regFixer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { blue, grey } from "@material-ui/core/colors";
import NotFound from "./components/notFound";
import MenuAppBar from "./components/menuAppBar"
import axios from "axios";

const API_URL = "http://localhost:3001";

//this.props.history.push("/movies");

class App extends Component {
  state = {
    positiveExamples: "",
    negativeExamples: "",
    regex: "",
    result: "",
    isFixed: false,
    isWaiting: false
  };

  handleFix = async () => {
    // this.setState({ isWaiting: true });
    // axios.post("http://localhost:3001").then(resp => {
    //   console.log("data: ", resp);
    //   this.setState({
    //     isWaiting: false,
    //     regex: resp.data
    //   });
    // });

    this.setState({ isWaiting: true });
    // let pe = this.state.positiveExamples.split("\n");
    // let ne = this.state.negativeExamples.split("\n");
    // pe = pe.filter(e => {e !== ""});
    
    const response = await axios.post(API_URL, {
      positiveExamples: this.state.positiveExamples.split("\n"),
      negativeExamples: this.state.negativeExamples.split("\n"),
      regex: this.state.regex
    });
    let result = response.data[0];
    // if(result === null) {
    //   result = "Your regex is correct";
    // }
    if(result[0] === "#") {
      result = result.substring(5, result.length - 5);
    }
    console.log(result);
    this.setState({
      isWaiting: false,
      isFixed: true,
      result
    });
  };

  handlePositiveChange = positiveExamples => {
    // TODO: update dynamic matching
    this.setState({ positiveExamples });
  };

  handleNegativeChange = negativeExamples => {
    // TODO: update dynamic matching
    this.setState({ negativeExamples });
  };

  handleRegexChange = regex => {
    // TODO: update dynamic matching
    this.setState({ regex });
  };

  handleClick = (id) => {
    if(id === 0) {
      this.setState({positiveExamples: "foo@demo.net\n"
      + "ba@test.co\n"
      + "smith@foo.com\n"
      + "bob_smith@foo.com\n"
      + "you@home.co\n"
      + "barney@stonehenge.com\n"
      + "test@gh.com\n"
      + "test@f.com\n"
      + "test@cde.com\n"
      + "bart@simpsons.info\n"
      + "test@t.com\n"
      + "test@ab.comd\n"
      + "bart@home.simp"});
      this.setState({negativeExamples: "you@home.coddd\n"
      + "barney@stonehenge.comfs\n"
      + "test@gh.comcs\n"
      + "test@f.comads\n"
      + "bar.\n"
      + "bob-smith@foo.com\n"
      + "ob.smith@foo.com\n"
      + "me.you@home.co.uk\n"
      + "fred&barney@stonehenge.com\n"
      + "king-bart@home.simpsons.com\n"
      + ".test.@test.com\n"
      + "spammer@[203.12.145.68]\n"
      + "bla@bla"});
      this.setState({regex: "\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}"})
    }
    if(id === 1) {
      this.setState({positiveExamples: "333-22-4444\n"
      + "123-45-6789\n"
      + "078-05-1120\n"
      + "678-15-2200\n"
      + "772-10-1600"});
      this.setState({negativeExamples: "773-00-0000\n"
      + "780-22-4444\n"
      + "999-88-7777\n"
      + "800-05-1120\n"
      + "123456789\n"
      + "078051120\n"
      + "333224444\n"
      + "333 22 4444\n"
      + "SSN"});
      this.setState({regex: "\d{3}-\d{2}-\d{4}"})
    }
    if(id === 2) {
      this.setState({positiveExamples: "0.0.0.0\n"
      + "255.255.255.2\n"
      + "192.168.0.136\n"
      + "8.8.4.10"});
      this.setState({negativeExamples: "01.01.02.02\n"
      + "00.00.00.00\n"
      + "255.55.255.02\n"
      + "192.168.00.136\n"
      + "008.008.004.010\n"
      + "256.257.255.1"});
      this.setState({regex: "(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}"})
    }
    this.setState({result : ""})
  }
  render() {
    return (
      <div className="App" /*style={{ backgroundColor: grey[900] }}*/>
        <MenuAppBar 
        handleClick={this.handleClick}/>
        <RegFixer 
        positiveExamples={this.state.positiveExamples}
        negativeExamples={this.state.negativeExamples}
        regex={this.state.regex}
        result={this.state.result}
        isWaiting={this.state.isWaiting}
        handlePositiveChange={this.handlePositiveChange}
        handleNegativeChange={this.handleNegativeChange}
        handleRegexChange={this.handleRegexChange}
        handleFix={this.handleFix}
        />
      </div>
    );
  }
}

export default App;
