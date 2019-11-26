import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { CardHeader } from "@material-ui/core";
import { blue, grey, red } from "@material-ui/core/colors";
import { textAlign } from "@material-ui/system";
import CircularProgress from "@material-ui/core/CircularProgress";


class ResultCard extends Component {
  render() {
    if (this.props.isWaiting === true) {
      return (
        
        <div>
        <Card style={{ maxWidth: 1205 }}>
          <CardContent
            style={{
              backgroundColor: this.props.color[this.props.darkness],
              height: 50
            }}
          >
            <h6 style={{ color: grey[50] }}>{this.props.name}</h6>
          </CardContent>
          <CardActions>
            {/* <div
              style="border:1px solid black;"
              contenteditable="true"
              style={{
                width: 1195,
                textAlign: "left",
                border: "1px solid lightblue"
              }}
              onInput={this.handleChange}
            >
              {this.props.regex}
            </div> */}
            <div style={{
              width: 1165
              //marginTop: 40
            }}>
          <CircularProgress
            
          />
        </div>
          </CardActions>
        </Card>
      </div>
      );
    }
    return (
      <div>
        <Card style={{ maxWidth: 1205 }}>
          <CardContent
            style={{
              backgroundColor: this.props.color[this.props.darkness],
              height: 50
            }}
          >
            <h6 style={{ color: grey[50] }}>{this.props.name}</h6>
          </CardContent>
          <CardActions>
            {/* <div
              style="border:1px solid black;"
              contenteditable="true"
              style={{
                width: 1195,
                textAlign: "left",
                border: "1px solid lightblue"
              }}
              onInput={this.handleChange}
            >
              {this.props.regex}
            </div> */}
            <h6
              style={{
                width: 1165,
                textAlign: "center"
              }}
            >
              {this.props.value}
            </h6>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ResultCard;
