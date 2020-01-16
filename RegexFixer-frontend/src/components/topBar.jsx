import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import {
  purple,
  grey,
  lightBlue,
  blue,
  lightGreen,
  indigo,
  red
} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import BuildIcon from "@material-ui/icons/Build";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    background: red[900], //indigo[900],//lightBlue["A700"],
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appBarTitle: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  toolbar: theme.mixins.toolbar
});

class TopBar extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            href="/"
            style={{ "text-decoration": "none", color: "#FFFFFF" }}
          >
            <i class="fas fa-home"></i>
          </IconButton>
          <Typography className={classes.appBarTitle} variant="h6" noWrap>
            Regex Fixer
          </Typography>
          <div className={classes.grow}></div>
          <Button
            variant="contained"
            color={red[900]}
            className={classes.button}
            startIcon={<BuildIcon />}
            style={{
              color: "#FFFFFF",
              background: red[900],
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#0069d9",
                borderColor: "#0062cc",
                boxShadow: "none"
              }
            }}
            onClick={this.props.onFix}
          >
            Fix It!
          </Button>
          {/* {this.props.buttons.map(button => (
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
              href={button.link}
              onClick={button.onClick}
              target="_blank"
              style={{ "text-decoration": "none", color: "#FFFFFF" }}
            >
              {button.icon}
            </IconButton>
          ))} */}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TopBar);
