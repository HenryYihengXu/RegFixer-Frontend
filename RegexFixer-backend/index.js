const express = require("express");
const app = express();
const cors = require("cors");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { stdout, stderr } = await exec("java Add 1 2");
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
  res.send(stdout);
});

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
