const fs = require("fs");
const { runDeleng, runGawe, runIsi, runBak, runWit } = require("../command");
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
    case cmdList[2]: //isi
      return runIsi(script);
      break;
    case cmdList[3]: //bak
      return runBak(script);
      break;
    case cmdList[4]: //wit
      return runWit(script);
      break;
    default:
      console.log("perintahe ora ditemukna : " + cmd.command);
      break;
  }
};

//run script
const runScript = (command) => {
  try {
    eval(command);
  } catch (error) {
    //console.error("punten, format perintahe ora sesuai!");
    console.log("Punten, format perintahe ora sesuai!");
  }
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
    "deleng -> 'halo dunya, ora ngapak ora kepenak'",
    function (err) {
      if (err) throw err;
      console.log(
        "file wis digawe. Coba jalana perintah `ngapak jalana` nggo mulai jalana projek!"
      );
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
