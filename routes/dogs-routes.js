"use strict";

const express = require("express");

const dogsRouter = express.Router();
const pg = require("pg");
const pool = require("../connection");



dogsRouter.get("/dogs", (req, res) =>{
  console.log("dogs route working");
  pool.query("SELECT * FROM dogs").then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  });
});

dogsRouter.delete("/dogs/:id", (req, res) =>{
  pool.query("DELETE FROM dogs WHERE id=$1::int", [req.params.id])
  .then(() =>{
    pool.query("SELECT * FROM dogs").then((result) =>{
      res.send(result.rows);
    });
  });
});

dogsRouter.post("/dogs", (req, res) =>{
  pool.query("INSERT INTO dogs(dog_name, dog_age, dog_breed, dog_colors, fav_stuff) VALUES($1::text, $2::int, $3::text, $4::text, $5::text)", [req.body.dog_name, req.body.dog_age, req.body.dog_breed,  req.body.dog_colors,  req.body.fav_stuff]).then(() => {
    pool.query("SELECT * FROM dogs").then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    });
  });
});


dogsRouter.put("/dogs/:id", (req, res) =>{
  pool.query("UPDATE dogs SET dog_name=$1::text, dog_age=$2::int, dog_breed=$3::text, dog_colors=$4::text, fav_stuff=$5::text WHERE id=$6::int",[req.body.dog_name, req.body.dog_age, req.body.dog_breed,  req.body.dog_colors,  req.body.fav_stuff, req.params.id]).then(() => {
    pool.query("SELECT * FROM dogs").then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    });
  });
});

// Export the Router object
module.exports = dogsRouter;

