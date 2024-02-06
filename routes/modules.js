/* eslint-disable no-undef */


module.exports = (app) => {
  const modules = require('../data/module-data/modules.json')
  const module_by_id = require('../data/module-data/module_by_id.json')

app.get('/master/get-modules', async (req, res) => {
  res.json(modules);
});

app.get('/master/get-module/:id', async (req, res) => {
  res.json(module_by_id);
});
}

