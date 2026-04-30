const fs = require("fs");
const path = require("path");
const os = require("os");


const filePath = path.join(__dirname, "files");
console.log(filePath);

function createFile(fileName, content) {
  fs.writeFileSync(path.join(filePath, fileName), content);
}

function testCreateFiles() {
  createFile("hello.txt", "Hello, World!!!");

  const osPlatform = os.platform();
const osFreemem = os.freemem();
const osTotalmem = os.totalmem();
const osInfo = 
`Platform: ${osPlatform}\n
Free Memory: ${osFreemem}\n
Total Memory: ${osTotalmem}`

createFile("os.txt", osInfo);
}

module.exports = { createFile, testCreateFiles };