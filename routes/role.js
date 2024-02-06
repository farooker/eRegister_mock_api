/* eslint-disable no-undef */


module.exports = (app) => {
  const role = require("../data/role.json");
  const role_by_id = require("../data/role_by_id.json");

  app.get("/master/get-roles", async (req, res) => {
    res.json(role);
  });

  app.get("/master/get-role/:role_id", async (req, res) => {
    res.json(role_by_id);
  });
};
