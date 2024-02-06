/* eslint-disable no-undef */

module.exports = (app) => {
  const business_unit = require("../data/master-data/business_unit.json");
  const business_unit_by_id = require("../data/master-data/business_unit_by_id.json");

  app.get("/master/get-business-units", async (req, res) => {
    res.json(business_unit);
  });

  app.get("/master/get-business-unit/:id", async (req, res) => {
    res.json(business_unit_by_id);
  });
};
