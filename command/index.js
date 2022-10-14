const { runBarange } = require("./barange");
const { runDeleng } = require("./deleng");
const { runGawe } = require("./gawe");
const { runIsi } = require("./isi");
const { runKeranjang } = require("./keranjangi");
const { runMuter } = require("./muter");

module.exports = {
  scriptDeleng: runDeleng,
  scriptGawe: runGawe,
  scriptIsi: runIsi,
  scriptKeranjangi: runKeranjang,
  scriptBarange: runBarange,
  scriptMuter: runMuter,
};
