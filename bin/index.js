#! /usr/bin/env node
const yargs = require("yargs");
const commandParser = require("./command-parser");
const { createNgapakFile, runNgapakFile } = require("./utils");
//const utils = require("./utils");

const value = commandParser.parseSentence(yargs.argv._);
const cmd = commandParser.parseCommand(yargs.argv._);

if (cmd == "gawe") {
  createNgapakFile();
} else if (cmd == "jalana") {
  runNgapakFile();
}

//console.log("cmd : " + cmd, " val : " + value);
