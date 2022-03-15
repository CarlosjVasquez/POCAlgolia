"use strict";

const app = require("./app/app");
const DB = require("./config/database");
const algoliasearch = require("algoliasearch/lite");

/* import algoliasearch from "algoliasearch/lite"; */
// API keys below contain actual values tied to your Algolia account
const client = algoliasearch("I2JCDIL0V7", "097b8eda827e3f6e958f712f584c0e8c");
const index = client.initIndex("poc_mages");

app.set("port", process.env.PORT || 3000);
const port = app.get("port");

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  DB.connect(async (error) => {
    if (error) throw err;
    const result = await DB.query(`SELECT * FROM apiprueba`);
    result.rows.forEach((item) => {
      // Make sure each object has an 'ObjectID' defined
      // We recommend keeping the 'ObjectID' analogous to your internal ID
      item.objectID = item.id;
      // Index the item with Algolia
      index.saveObject(item);
    });
  });
});
