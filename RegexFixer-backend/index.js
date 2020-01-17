const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
app.use(express.json());
app.use(cors());

const fileName = "input.txt";

// app.post("/", async (req, res) => {
//   console.log("request received");
//   let input = "";
//   input += req.body.regex + "\n";
//   input += "---\n";
//   for (let i = 0; i < req.body.positiveExamples.length; i++) {
//     if (req.body.positiveExamples[i] !== "") {
//       input += req.body.positiveExamples[i] + "\n";
//     }
//   }
//   input += "---\n";
//   for (let i = 0; i < req.body.negativeExamples.length; i++) {
//     if (req.body.negativeExamples[i] !== "") {
//       input += req.body.negativeExamples[i] + "\n";
//     }
//   }
//   fs.writeFile(fileName, input, async () => {
//     // const { stdout, stderr } = await exec("java Add 1 2"); // TODO: change this command to the correct one
//     // const { stdout, stderr } = await exec("java -jar target/regfixer.jar -m 1 fix --file tests/benchmark_explicit/test_ssn.txt");
//     const { stdout, stderr } = await exec(
//       "java -Djava.library.path=:./Z3-4.4.1-X64-OSX-10.11 -jar target/regfixer.jar -m 1 fix --file " +
//         fileName
//     );
//     console.log("stdout:", stdout);
//     console.log("stderr:", stderr);
//     let result = stdout.match("#sol#.*#sol#");
//     if (result === "") {
//       result = "Solution not found, try to revise your regex.";
//     }
//     res.send(result);
//   });
// });

const port = process.env.PORT || 3000;
//const port = 3001;

app
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("index"))
  .post("/", async (req, res) => {
    console.log("request received");
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
    //res.send("request received");
    //const { stdout, stderr } = await exec("java Add 1 2");
    //res.send(stdout);

    fs.writeFile(fileName, input, async () => {
      const { stdout, stderr } = await exec(
        "java -Djava.library.path=:./ -jar target/regfixer.jar -m 1 fix --file " +
          fileName
      );
      console.log("stdout:", stdout);
      console.log("stderr:", stderr);
      let result = stdout.match("#sol#.*#sol#");
      if (result === "") {
        result = "Solution not found, try to revise your regex.";
      }
      res.send(result);
    });
    res.send("result");
  })
  .listen(port, () => {
    console.log(`listening on port ${port}`);
  });
