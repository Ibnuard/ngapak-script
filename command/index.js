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

module.exports = {
  runDeleng: runDeleng,
  runGawe: runGawe,
  runIsi: runIsi,
  runBak: runBak,
};
