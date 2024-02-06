/* eslint-disable no-undef */

//const { delay } = require('../utils');
const fs = require('fs');
module.exports = (app) => {
  app.get('/dowload/test-pdf', (req, res) => {
    const filePath = 'file/test.pdf';
      fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }
        const base64String = data.toString('base64');
        res.send(base64String);
      });
  });
  app.get('/dowload/test-xlsx', (req, res) => {
    const filePath = 'file/test.xlsx';
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

