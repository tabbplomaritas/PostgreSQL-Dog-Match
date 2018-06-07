"use strict";

const express = require("express");

const matchesRouter = express.Router();
const pg = require("pg");
const pool = require("../connection");



matchesRouter.get("/matches", (req, res) =>{

  pool.query("SELECT * FROM dogs FULL JOIN owners ON dogs.fav_stuff = owners.fav_stuff").then((result) => {
    res.send(result.rows);
  });
});


// Export the Router object
module.exports = matchesRouter;

