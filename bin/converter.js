const {
  scriptDeleng,
  scriptGawe,
  scriptIsi,
  scriptKeranjangi,
  scriptBarange,
  scriptMuter,
} = require("../command");
const { cmdList } = require("./script-list");

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
      return scriptDeleng(script);
      break;
    case cmdList[1]: //gawe
      return scriptGawe(script);
      break;
    case cmdList[2]: //isi
      return scriptIsi(script);
      break;
    case cmdList[3]: //bak
      return scriptKeranjangi(script);
      break;
    case cmdList[4]: //wit
      return scriptBarange(script);
      break;
    case cmdList[5]: //wit
      return scriptMuter(script);
      break;
    default:
      console.log("perintahe ora ditemukna : " + cmd);
      break;
  }
};

module.exports = { convertScript: parseScript };
