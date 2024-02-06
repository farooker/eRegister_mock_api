/* eslint-disable no-undef */
module.exports = (app) => {
  const history_master = require("../data/history-data/master.json");
  const history_role = require("../data/history-data/role.json");
  const history_user = require("../data/history-data/user.json");

  app.get("/user/get-user-change-logs", async (req, res) => {
    res.json(history_master);
  });
};
