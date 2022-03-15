"use strict";
const DB = require("../config/database");
const algoliasearch = require("algoliasearch/lite");

/* import algoliasearch from "algoliasearch/lite"; */
// API keys below contain actual values tied to your Algolia account
const client = algoliasearch("I2JCDIL0V7", "097b8eda827e3f6e958f712f584c0e8c");
const index = client.initIndex("poc_mages");

const controller = {
  getAlgolia: async (req, res) => {
    try {
      const response = await index.search("");
      res.status(200).json({
        code: 200,
        status: "SUCCESS",
        message: "OK",
        response: response,
      });
    } catch (error) {
      res.status(500).send("error");
    }
  },
  getAlgoliaId: async (req, res) => {
    try {
      const response = await index.findObject((hit) => hit.id == req.params.id);
      res.status(200).json({
        code: 200,
        status: "SUCCESS",
        message: "OK",
        response: response,
      });
    } catch (error) {
      res.status(500).send("error");
    }
  },
  getServer: async (req, res) => {
    try {
      const response = await DB.query(`SELECT * FROM apiprueba`);
      res.status(200).json({
        code: 200,
        status: "SUCCESS",
        message: "OK",
        response: response.rows,
      });
    } catch (error) {
      res.status(500).send("error");
    }
  },
  getServerId: async (req, res) => {
    try {
      const response = await DB.query(
        `SELECT * FROM apiprueba WHERE id = ${req.params.id}`
      );
      res.status(200).json({
        code: 200,
        status: "SUCCESS",
        message: "OK",
        response: response.rows[0],
      });
    } catch (error) {
      res.status(500).send("error");
    }
  },
};

module.exports = controller;
