//Bak -> array
const runKeranjang = (value = "") => {
  //format
  // keranjangi kosongan -> [1,2,3]

  const splitScript = value.split("->");
  const getVariableName = splitScript[0].split(" ")[1];
  const getVariableValue = splitScript[1];

  return `const ${getVariableName} = ${getVariableValue}`;
};

module.exports = { runKeranjang };
