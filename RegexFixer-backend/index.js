const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
app.use(express.json());
app.use(cors());

const fileName = "input.txt";

app.post("/", async (req, res) => {
  let input = "";
  input += req.body.regex + "\n";
  input += "---\n";
  for (let i = 0; i < req.body.positiveExamples.length; i++) {
    if (req.body.positiveExamples[i] !== "") {
      input += req.body.positiveExamples[i] + "\n";
    }
  }
  input += "---\n";
  for (let i = 0; i < req.body.negativeExamples.length; i++) {
    if (req.body.negativeExamples[i] !== "") {
      input += req.body.negativeExamples[i] + "\n";
    }
  }
  fs.writeFile(fileName, input, async () => {
    const { stdout, stderr } = await exec("java Add 1 2");
    console.log("stdout:", stdout);
    console.log("stderr:", stderr);
    res.send(stdout);
  });
});

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
