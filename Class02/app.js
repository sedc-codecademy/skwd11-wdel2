import express from "express";
import chalk from "chalk";
import router from "./routes.js";
import { timeOfRequest } from "./middlewares/timelogging.middleware.js";

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//   timeOfRequest(req, res, next);
// });

// Same as above but shorter =)
app.use(timeOfRequest);

// Simple middleware
/**
 * The middleware
 * can access: request, response, next
 *
 * The middlwares AFFECT only those endpoints "BELOW" them
 */
// app.use((request, response, next) => {
//   console.log(
//     chalk.green("Our first middleware intercepted the requests made.")
//   );

//   next();
// });

// This middleware will only INTERCEPT /products
// app.use((req, res, next) => {
//   const time = new Date().toLocaleString();
//   console.log(chalk.green(`The /products endpoint accessed at: ${time}`));
//   next();
// });

// We notified our app about the router implementation
app.use(router);

app.listen(3000, () => {
  console.log(chalk.magenta("Our server is up and running."));
});
