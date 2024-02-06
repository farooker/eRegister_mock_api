/* eslint-disable no-undef */

const { delay } = require('../utils');
const fs = require('fs');
module.exports = (app) => {
  const user_all = require('../data/userGetAll.json')
  const user_byId = require('../data/userGetById.json')


  app.get('/users/get-users', async (req, res) => {
      await delay(2000);
      res.setHeader('Items-Offset', 0);
      res.setHeader('Items-Limit', 10);
      res.setHeader('Items-Total', 24);
      res.json(user_all);
  });
  app.get('/user/get-user/:user_id', async (req, res) => {
    await delay(2000);
    res.json(user_byId);
  });
  app.post('/user/deactivate-user', async (req, res) => {
    await delay(2000);cmd
      res.json({
        "is_success": true,
        "code": 200,
        "message": "Ok",
        "data": {}
      });
  });
  app.post('/users/create-user', async (req, res) => {
    await delay(2000);
      res.json({
        "is_success": true,
        "code": 200,
        "message": "Ok",
        "data": {}
      });
  });
  app.post('/user/create-multiple-user', async (req, res) => {
    await delay(2000);
      res.json({
        "is_success": true,
        "code": 200,
        "message": "Ok",
        "data": {}
      });
  });
  app.get('/user/download-create-multiple-user-template', (req, res) => {
    const filePath = 'file/active.xlsx';
      fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }
        const base64String = data.toString('base64');
        res.send(base64String);
      });
  });
  app.get('/user/download-deactivate-user-template', (req, res) => {
    const filePath = 'file/active.xlsx';
      fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }
        const base64String = data.toString('base64');
        res.send(base64String);
      });
  });
}

