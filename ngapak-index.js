#! /usr/bin/env node
const yargs = require("yargs");
const commandParser = require("./bin/command-parser");
const { createNgapakFile, runNgapakFile } = require("./bin/utils");
//const utils = require("./utils");

const value = commandParser.parseSentence(yargs.argv._);
const cmd = commandParser.parseCommand(yargs.argv._);

if (cmd == "labuhi") {
  createNgapakFile();
} else if (cmd == "jalana") {
  runNgapakFile();
}

//console.log("cmd : " + cmd, " val : " + value);
