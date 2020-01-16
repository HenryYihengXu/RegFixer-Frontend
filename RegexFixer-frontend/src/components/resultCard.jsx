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
import { Grid } from "@material-ui/core";

class ResultCard extends Component {
  render() {
    if (this.props.isWaiting === true) {
      return (
        <div>
          <Card
            style={{
              width: "100%"
              //height: "100%"
            }}
          >
            <CardContent
              style={{
                backgroundColor: this.props.color[this.props.darkness],
                height: 50
              }}
            >
              <h6 style={{ color: grey[50], textAlign: "center" }}>
                {this.props.name}
              </h6>
            </CardContent>
            <CardActions
              style={{
                width: "100%",
                textAlign: "center",
                align: "center"
              }}
            >
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <CircularProgress
                  style={{
                    align: "center"
                  }}
                />
              </Grid>
            </CardActions>
          </Card>
        </div>
      );
    }
    return (
      <div>
        <Card
          style={{
            width: "100%"
            //height: "100%"
          }}
        >
          <CardContent
            style={{
              backgroundColor: this.props.color[this.props.darkness],
              height: 50
            }}
          >
            <h6 style={{ color: grey[50], textAlign: "center" }}>
              {this.props.name}
            </h6>
          </CardContent>
          <CardActions>
            <h6
              style={{
                width: "100%",
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
