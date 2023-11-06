const fs = require("fs");

fs.writeFile("pepito.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("pepito.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
