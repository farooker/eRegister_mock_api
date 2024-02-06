/* eslint-disable no-undef */

module.exports = (app) => {
  const actions = require('../data/action-data/action.json')

app.get('/master/get-actions', async (req, res) => {
  res.json(actions);
});
}

