//isi -> const
const runIsi = (value = "") => {
  //format
  // gawe tulisan -> args

  const splitScript = value.split("->");
  const getVariableName = splitScript[0].split(" ")[1];
  const getVariableValue = splitScript[1];

  return `const ${getVariableName} = ${getVariableValue}`;
};

module.exports = { runIsi };
