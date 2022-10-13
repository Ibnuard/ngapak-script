//deleng -> console.log
const runDeleng = (value = "") => {
  // format
  // deleng -> "arg"
  //

  const splitArgs = value.split("->");

  const result = splitArgs[1];

  return `console.log(${result})`;
};

//gawe -> const
const runGawe = (value = "") => {
  //format
  // gawe tulisan -> args

  const splitScript = value.split("->");
  const getVariableName = splitScript[0].split(" ")[1];
  const getVariableValue = splitScript[1];

  return `const ${getVariableName} = ${getVariableValue}`;
};

module.exports = {
  runDeleng: runDeleng,
  runGawe: runGawe,
};
