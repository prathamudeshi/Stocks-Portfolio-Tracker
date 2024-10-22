const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router");
const createUserRouter = require("./helpers/create_user_router"); // Import the user router
const cors = require("cors");

app.use(cors());
app.use(express.json());

MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("portfolio");
    const sharesCollection = db.collection("shares");
    const usersCollection = db.collection("users"); // User collection
    const sharesRouter = createRouter(sharesCollection);
    const usersRouter = createUserRouter(usersCollection); // User router
    app.use("/api/shares", sharesRouter);
    app.use("/api/users", usersRouter); // Connect user router
  })
  .catch(console.error);

app.listen(5000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
