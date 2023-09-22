console.log("First inited node js project");

// DEFAULT IMPORT
import calculator from "./calculator.js";
// DEFAULT IMPORT MULTIPLE VALUES
import movies from "./movies.js";
// NAMED IMPORT
import { tasks, person } from "./tasks.js";
// IMPORT EVERYTHING
import * as TaskService from "./tasks.js";

// USAGE SUGGESTION FROM THE LIBRARY (PACKAGE) ITSELF
import chalk from "chalk";

// NODE JS MODULES
// THESE MODULES COME OUT OF THE BOX WITH NODE JS
// FILE-SYSTEM
import fs from "fs";

// OUR FILE SYSTEM SERVICE
import { writeFile, readFile, appendFile } from "./file_system_service.js";

const additionResult = calculator(2, 10, "+");
const divisionResult = calculator(4123, 4, "/");
const multiplicationResult = calculator(4612, 6, "*");
const subsctrictionResult = calculator(65, 15, "-");

console.log(subsctrictionResult);
console.log(additionResult);
console.log(divisionResult);
console.log(multiplicationResult);

console.log("---- EXAMPLE MOVIES MULTIPLE IMPORTS ----");
const moviesLibray = movies.moviesLibrary;
movies.printMovies(moviesLibray);

console.log("---- NAMED IMPORT EXAMPLE ----");
console.log(tasks);
console.log(person);

console.log("---- NAMED IMPORT EVERYTHING * ----");
console.log(TaskService.tasks);
console.log(TaskService.person);

console.log("---- LIBRARY EXAMPLE USAGE ----");

console.log(chalk.magenta("First log message using chalk"));

console.log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);

const welcomeMassage =
  "Hello, this is our first class fo MERN, currently learning NODEJS";

console.log(chalk.green.bgRedBright(welcomeMassage));

console.log("---- USING NODEJS FS (FILE SYSTEM MODULE) ----");

// writeFileSync will OVERWRITE all of the contents in the file
fs.writeFileSync("./movies.txt", "John Wick");
fs.writeFileSync("./movies.txt", "Openheimer");
// appendFileSync is appending a new content/value to the file
fs.appendFileSync("./movies.txt", "\nBarbie");

const songsPath = "./songs.txt";

// Using our writeFile function to write in the FS
writeFile(songsPath, "Stairway to Heaven");
appendFile(songsPath, "\nHighway to Hell");
// Using our readFile function to read from the FS
const content = readFile(songsPath);
console.log(content);

console.log("---- READING PRODUCTS.JSON ----");

const productsContent = readFile("./db/products.json");
console.log(productsContent);
// console.log(productsContent[0]);
console.log(typeof productsContent);

const products = JSON.parse(productsContent);
console.log("PRODUCTS ARE:", products);

const firstProduct = products[0];

console.log("First product: ", firstProduct);
console.log(firstProduct.name);
