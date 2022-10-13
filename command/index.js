const { cmdList } = require("../bin/script-list");

//deleng -> console.log
const runDeleng = (value = "") => {
  // format
  // deleng -> "arg"
  //

  const splitArgs = value.split("->");

  const result = splitArgs[1];

  return `console.log(${result})`;
};

//gawe -> let
const runGawe = (value = "") => {
  //format
  // gawe tulisan -> args

  const splitScript = value.split("->");
  const getVariableName = splitScript[0].split(" ")[1];
  const getVariableValue = splitScript[1];

  if (getVariableValue.length > 0) {
    return `let ${getVariableName} = ${getVariableValue}`;
  } else {
    return `let ${getVariableName}`;
  }
};

//isi -> const
const runIsi = (value = "") => {
  //format
  // gawe tulisan -> args

  const splitScript = value.split("->");
  const getVariableName = splitScript[0].split(" ")[1];
  const getVariableValue = splitScript[1];

  return `const ${getVariableName} = ${getVariableValue}`;
};

//Bak -> array
const runBak = (value = "") => {
  //format
  // bak kosongan -> [1,2,3]

  const splitScript = value.split("->");
  const getVariableName = splitScript[0].split(" ")[1];
  const getVariableValue = splitScript[1];

  return `const ${getVariableName} = ${getVariableValue}`;
};

//Wit -> object
const runWit = (value = "") => {
  //format
  // wit gedang -> {godong: 'ijo', kedebog : 2}

  const splitScript = value.split("->");
  const getVariableName = splitScript[0].split(" ")[1];
  const getVariableValue = splitScript[1];

  return `const ${getVariableName} = ${getVariableValue}`;
};

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
  const _getCommand = (line = "") => {
    const cmd = line.split(" ")[0];

    return cmd;
  };

  const _parseScript = (script = "") => {
    const cmd = _getCommand(script);

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
      const trans = _parseScript(split[i]);
      temp = temp + trans + ";";
    }

    return temp;
  }

  return `for(let ${variableName} = ${variableStartValue}; ${variableName}${variableOperation}${variableCondition}; ${variableName}++){${parseTodo()}}`;
};

module.exports = {
  runDeleng: runDeleng,
  runGawe: runGawe,
  runIsi: runIsi,
  runBak: runBak,
  runWit: runWit,
  runMuter: runMuter,
};
