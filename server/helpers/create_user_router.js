const express = require("express");

const createUserRouter = function (collection) {
  const router = express.Router();

  // CREATE - ADD NEW USER
  router.post("/", (req, res) => {
    const newUser = req.body;
    collection
      .insertOne(newUser)
      .then((result) => res.json(result.ops[0]))
      .catch((err) => {
        console.error(err);
        res.status(500).json({ status: 500, error: err });
      });
  });

  return router;
};

module.exports = createUserRouter;
