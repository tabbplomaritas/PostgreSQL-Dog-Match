"use strict";

const express = require("express");

const ownersRouter = express.Router();
const pg = require("pg");
const pool = require("../connection");



ownersRouter.get("/owners", (req, res) =>{
  console.log("owners route working");
  pool.query("SELECT * FROM owners ORDER BY owner_id").then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  });
});

ownersRouter.post("/owners", (req, res) =>{
  pool.query("INSERT INTO owners(owner_name, owner_address, owner_age, current_dog_name, fav_stuff) VALUES($1::text, $2::text, $3::int, $4::text, $5::text)", [req.body.owner_name, req.body.owner_address, req.body.owner_age, req.body.dog_name, req.body.fav_stuff]).then(() => {
    pool.query("SELECT * FROM owners ORDER BY owner_id").then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    });
  });
});

ownersRouter.delete("/owners/:owner_id", (req, res) =>{
  pool.query("DELETE FROM owners WHERE owner_id=$1::int", [req.params.owner_id])
  .then(() =>{
    pool.query("SELECT * FROM owners ORDER BY owner_id").then((result) =>{
      res.send(result.rows);
    });
  });
});

ownersRouter.put("/owners/:owner_id", (req, res) =>{
  pool.query("UPDATE owners SET owner_name=$1::text, owner_address=$2::text, owner_age=$3::int, dog_name=$4::text, fav_stuff=$5::text WHERE owner_id=$6::int",[req.body.owner_name, req.body.owner_address, req.body.owner_age,  req.body.dog_name,  req.body.fav_stuff, req.params.owner_id]).then(() => {
    pool.query("SELECT * FROM owners ORDER BY owner_id").then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    });
  });
});


// Export the Router object
module.exports = ownersRouter;

