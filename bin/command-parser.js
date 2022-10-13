const {} = require("./utils");

//parse the value
function parseSentence(words) {
  return words[1];
}

//parse the command
function parseCommand(words) {
  return words[0];
}

module.exports = {
  parseCommand: parseCommand,
  parseSentence: parseSentence,
};
