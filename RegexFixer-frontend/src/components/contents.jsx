import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import ExampleCard from "./exampleCard";
import { makeStyles } from "@material-ui/core/styles";
import {
  purple,
  grey,
  lightBlue,
  blue,
  lightGreen,
  indigo,
  red,
  green
} from "@material-ui/core/colors";
import RegexCard from "./regexCard";
import ResultCard from "./resultCard";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

const Contents = props => {
  const classes = useStyles();
  return (
    <main className={classes.content} style={{ background: "#FFFFFF" }}>
      <div className={classes.toolbar} />
      <Grid
        container
        style={{
          background: "#FFFFFF"
        }}
        spacing={2}
      >
        <Grid item xs={6}>
          <ExampleCard
            name="Positive Examples"
            color={green}
            darkness={500}
            handleChange={props.handlePositiveChange}
            examples={props.positiveExamples}
          />
        </Grid>
        <Grid item xs={6}>
          <ExampleCard
            name="Negative Examples"
            color={red}
            darkness={800}
            handleChange={props.handleNegativeChange}
            examples={props.negativeExamples}
          />
        </Grid>
        <Grid item xs={12}>
          <RegexCard
            name="Your Regex"
            color={lightBlue}
            darkness={700}
            handleChange={props.handleRegexChange}
            positiveExamples={props.positiveExamples}
            negativeExamples={props.negativeExamples}
            regex={props.regex}
          />
        </Grid>
        <Grid item xs={12}>
          <ResultCard
            name="Result"
            color={lightBlue}
            darkness={700}
            result={props.result}
            isWaiting={props.isWaiting}
          />
        </Grid>
      </Grid>
    </main>
  );
};

export default Contents;
