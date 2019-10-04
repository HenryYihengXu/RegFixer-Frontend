import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class Menu extends Component {
  onItemSelect = url => {
    this.props.history.push(url)
  }
  render() {
    return (
      <ul class="list-group">
        <li class="list-group-item" onClick={() => this.onItemSelect("/regfixer")}>
          RegFixer
        </li>
        <li class="list-group-item" onClick={() => this.onItemSelect("/login")}>
          Login
        </li>
        <li class="list-group-item" onClick={() => this.onItemSelect("/register")}>
          Register
        </li>
        <li class="list-group-item" onClick={() => this.onItemSelect()}>
          option 1
        </li>
        <li class="list-group-item" onClick={() => this.onItemSelect()}>
          option 2
        </li>
      </ul>
    );
  }
}

export default Menu;
