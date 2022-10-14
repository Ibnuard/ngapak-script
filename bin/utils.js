const fs = require("fs");
const { convertScript } = require("./converter");

//open and read .ngpk file
const readNgapakFile = () => {
  try {
    var data = fs.readFileSync("indeks.ngpk", "utf8");
    return data.toString();
  } catch (e) {
    console.log("Error:", e.stack);
  }
};

//run script per line
const runAllScript = (script = "") => {
  const makeSingleLine = script
    .replace(/[\r\n]/gm, "")
    .split(";")
    .filter((item) => {
      return item;
    });

  let temp = "";

  for (let i = 0; i < makeSingleLine.length; i++) {
    temp = temp + convertScript(makeSingleLine[i]) + ";";
  }

  compileScript(temp);
};

//compile script
const compileScript = (command) => {
  try {
    eval(command);
  } catch (error) {
    //console.error("punten, format perintahe ora sesuai!");
    console.log("Punten, format perintahe ora sesuai : + " + command);
  }
};

//=========================================
//
//
// ============= MODUL UTILS ==============
//
//
//=========================================

const createNgapakFile = (erorr) => {
  // writeFile function with filename, content and callback function
  fs.writeFile(
    "indeks.ngpk",
    "deleng -> 'halo dunya, ora ngapak ora kepenak';",
    function (err) {
      if (err) throw err;
      console.log(
        "file wis digawe. Coba jalana perintah `ngapak jalana` nggo mulai jalana projek!"
      );
    }
  );
};

const runNgapakFile = () => {
  const script = readNgapakFile();
  runAllScript(script);
};

module.exports = {
  createNgapakFile: createNgapakFile,
  runNgapakFile: runNgapakFile,
};
