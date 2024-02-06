/* eslint-disable no-undef */

module.exports = (app) => {
  const corparation = require("../data/master-data/corparation.json");
  const corparation_by_id = require("../data/master-data/corparation_by_id.json");

  app.get("/master/get-corporations", async (req, res) => {
    res.json(corparation);
  });

  app.get("/master/get-corporation/:id", async (req, res) => {
    res.json(corparation_by_id);
  });
};
