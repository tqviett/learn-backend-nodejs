const app = require("./src/app");
const PORT = process.env.PORT || 3055;

const server = app.listen(3055, () => {
  console.log(`WSV eConnerce start with ${PORT}`);
});

// process.on("SIGINT", () => {
//   server.close(() => {
//     console.log(`Exit server Express`);
//   });
// });
