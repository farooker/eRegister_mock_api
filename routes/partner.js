/* eslint-disable no-undef */

const { delay } = require('../utils');

module.exports = (app) => {
  const business = require('../data/business-partner-detail.json')

 app.get('/partner/get-business-partner-detail', async (req, res) => {
  await delay(2000);
  res.setHeader('Items-Offset', 0);
  res.setHeader('Items-Limit', 10);
  res.setHeader('Items-Total', 24);
  res.json(business);
});
}

