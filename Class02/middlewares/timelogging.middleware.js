export const timeOfRequest = (req, res, next) => {
  const time = new Date().toISOString();
  console.log("Time of request for all routes: ", time);
  next();
};
