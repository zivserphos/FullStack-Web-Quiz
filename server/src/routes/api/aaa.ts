import fs from "fs";

const files = fs.readdirSync("./src/db/questions");

files.map((fileName) =>
  fs.writeFileSync(`./src/routes/api/${fileName.split(".json")[0]}.ts`, "")
);

console.log(files);

export default files;
