const path = require("path");

module.exports = {
  entry: "./app.js", // Entry point of your app
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file name
  },
  target: "node", // Ensure Webpack targets a Node.js environment
  mode: "production", // Minimize the output for production
};
