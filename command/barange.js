//Wit -> object
const runBarange = (value = "") => {
  //format
  // wit gedang -> {godong: 'ijo', kedebog : 2}

  const splitScript = value.split("->");
  const getVariableName = splitScript[0].split(" ")[1];
  const getVariableValue = splitScript[1];

  return `const ${getVariableName} = ${getVariableValue}`;
};

module.exports = { runBarange };
