import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { withStyles } from "@material-ui/core/styles";
import {
  purple,
  grey,
  lightBlue,
  blue,
  lightGreen,
  deepPurple,
  green
} from "@material-ui/core/colors";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    background: grey[900], //lightBlue["A100"],
    width: drawerWidth
    //color: "#FFFFFF"
  },
  toolbar: theme.mixins.toolbar
});

const demos = ["Email", "SSN", "IP"];

class SideBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        open={false}
      >
        <div
          className={classes.toolbar}
          //backgroundImage="../images/4.PNG"
          //style={{ backgroundImage: "../images/1.PNG" }}
        />
        <div
          style={{
            //background: "#FFFF00",
            textAlign: "center"
          }}
        >
          {this.props.children}
          <h5 style={{ color: "#FFFFFF" }}>
            <b>Load Examples</b>
          </h5>
        </div>

        <List>
          {demos.map((demo, index) => (
            <div style={{ color: "#FFFFFF" }}>
              <ListItem
                button
                key={index}
                onClick={() => this.props.handleLoadDemo(demo)}
              >
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={demo} />
              </ListItem>
            </div>
          ))}
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SideBar);
