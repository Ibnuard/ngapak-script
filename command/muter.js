const { cmdList } = require("../bin/script-list");
const { runBarange } = require("./barange");
const { runDeleng } = require("./deleng");
const { runGawe } = require("./gawe");
const { runIsi } = require("./isi");
const { runKeranjang } = require("./keranjangi");

//muter -> for
const runMuter = (value = "") => {
  //format
  // muter -> kang (initial) misal > / < / <= / >= (variable) kudu  (perintah)
  //contoh : muter urut kang 0 nek >= 10 kudu -> deleng -> "urutan : " + urut; mandeg;

  const splitScript = value.split("-->");
  const args1 = splitScript[0].split(" ");
  const variableName = args1[1];
  const variableStartValue = args1[3];
  const variableOperation = args1[5];
  const variableCondition = args1[6];

  const todoPattern = /,/g;
  const todo = splitScript[1];

  const resTodo = todo.replace(todoPattern, ";");

  //get command based on list
  const getCommand = (line = "") => {
    const cmd = line.split(" ")[0];

    return cmd;
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
        return runKeranjang(script);
        break;
      case cmdList[4]: //wit
        return runBarange(script);
        break;
      case cmdList[5]: //wit
        return runMuter(script);
        break;
      default:
        console.log("perintahe ora ditemukna : " + cmd);
        break;
    }
  };

  function parseTodo() {
    const split = resTodo.split(";");

    let temp = "";

    for (let i = 0; i < split.length; i++) {
      const trans = parseScript(split[i]);
      temp = temp + trans + ";";
    }

    return temp;
  }

  return `for(let ${variableName} = ${variableStartValue}; ${variableName}${variableOperation}${variableCondition}; ${variableName}++){${parseTodo()}}`;
};

module.exports = { runMuter };
