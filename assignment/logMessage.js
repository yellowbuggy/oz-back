const fs = require("fs");
const path = require("path");

const logMessage = (message) => {
  console.log(message);
  dateNow = new Date().toLocaleDateString("en-CA");
  const filePath = path.join(__dirname, "logs", `${dateNow}.log`);
  fs.writeFileSync(filePath, message);
}

module.exports = { logMessage };