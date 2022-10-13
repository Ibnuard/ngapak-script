const fs = require("fs");
const { runDeleng, runGawe } = require("../command");
const { cmdList } = require("./script-list");

//open and read .ngpk file
const readNgapakFile = () => {
  try {
    var data = fs.readFileSync("indeks.ngpk", "utf8");
    return data.toString();
  } catch (e) {
    console.log("Error:", e.stack);
  }
};

//local utils
const removeCommentFromCode = (code = "") => {
  const cleanCode = code.split("//")[0];

  return cleanCode;
};

//get command based on list
const getCommand = (line = "") => {
  const cmd = line.split(" ")[0];

  return cmd;
};

//run script per line
const runAllScript = (script = "") => {
  const makeSingleLine = script
    .replace(/[\r\n]/gm, "")
    .split(";")
    .filter((item) => {
      return item;
    });

  let temp = "";

  for (let i = 0; i < makeSingleLine.length; i++) {
    temp = temp + parseScript(makeSingleLine[i]) + ";";
  }

  runScript(temp);
};

//parse script from .ngpk
const parseScript = (script = "") => {
  const cmd = getCommand(script);

  switch (cmd) {
    case cmdList[0]: //deleng
      return runDeleng(script);
      break;
    case cmdList[1]: //gawe
      return runGawe(script);
      break;
    default:
      console.log("perintahe ora ditemukna : " + cmd.command);
      break;
  }
};

//run script
const runScript = (command) => {
  eval(command);
};

//=========================================
//
//
// ============= MODUL UTILS ==============
//
//
//=========================================

const createNgapakFile = (erorr) => {
  // writeFile function with filename, content and callback function
  fs.writeFile(
    "indeks.ngpk",
    "deleng -> 'halo dunya :)' //coba perentah `ngapak jalana` ning cmd",
    function (err) {
      if (err) throw err;
      console.log("File wis dadi digawe!");
    }
  );
};

const runNgapakFile = () => {
  const script = readNgapakFile();
  runAllScript(script);
};

module.exports = {
  createNgapakFile: createNgapakFile,
  runNgapakFile: runNgapakFile,
};
