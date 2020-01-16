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
import { blue, grey } from "@material-ui/core/colors";

class ExampleCard extends Component {
  // handleChange = ({ currentTarget: input }) => {
  //   this.props.handleChange(input.textContent);
  // };
  handleChange = ({ currentTarget: input }) => {
    this.props.handleChange(input.value);
  };
  render() {
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
              height: 50,
              backgroundColor: this.props.color[this.props.darkness]
            }}
          >
            <h6 style={{ color: grey[50], textAlign: "center" }}>
              {this.props.name}
            </h6>
          </CardContent>
          <CardActions>
            <textarea
              style={{ width: "100%", minHeight: 200 }}
              placeholder={this.props.name}
              onChange={this.handleChange}
              value={this.props.examples}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default ExampleCard;
