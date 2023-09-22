import fs from "fs";
import chalk from "chalk";

export const writeFile = (filePath, content) => {
  console.log(chalk.magenta(`Writing to file: ${filePath}...`));

  fs.writeFileSync(filePath, content);

  console.log(chalk.green(`Wrote to file ${filePath} success.`));
};

export const readFile = (filePath) => {
  console.log(chalk.magenta(`Reading from file: ${filePath}...`));

  const contentOfTheFile = fs.readFileSync(filePath, { encoding: "utf-8" });

  console.log(chalk.green(`Read from file: ${filePath} success.`));

  return contentOfTheFile;
};

export const appendFile = (filePath, content) => {
  console.log(chalk.magenta(`Appending to file: ${filePath}...`));

  fs.appendFileSync(filePath, content);

  console.log(chalk.green(`Append to file ${filePath} success.`));
};
