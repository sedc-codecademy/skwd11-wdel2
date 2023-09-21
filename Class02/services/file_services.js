import fs from "fs";

export const readFile = (filePath) => {
  const content = fs.readFileSync(filePath, { encoding: "utf-8" });

  return content;
};

export const writeFile = (filePath, content) => {
  fs.writeFileSync(filePath, content);
};
