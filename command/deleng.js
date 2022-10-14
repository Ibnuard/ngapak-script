//deleng -> console.log
const runDeleng = (value = "") => {
  // format
  // deleng -> "arg"
  //

  const splitArgs = value.split("->");

  const result = splitArgs[1];

  return `console.log(${result})`;
};

module.exports = { runDeleng };
