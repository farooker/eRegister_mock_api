/* eslint-disable no-undef */

module.exports = (app) => {
  const company = require("../data/company.json");
  const company_by_id = require("../data/master-data/company_by_id.json");
  const company_categories = require("../data/company-categories.json");

  app.get("/master/get-companies", async (req, res) => {
    res.json(company);
  });

  app.get("/master/get-company/:id", async (req, res) => {
    res.json(company_by_id);
  });
  app.get("/master/get-company-categories", async (req, res) => {
    res.json(company_categories);
  });
};
