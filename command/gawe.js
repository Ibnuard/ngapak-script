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

module.exports = { runGawe };
