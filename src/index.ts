import app from "./main/app.js";

const port = 3000;

console.clear();

app.listen(port, () => {
  console.log("Running on " + port + " port");
});
