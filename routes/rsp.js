/* eslint-disable no-undef */

const { delay } = require("../utils");

module.exports = (app) => {
  const policy_results = require("../data/rsp-policy-results.json");
  const survey_results = require("../data/rsp-survey-results.json");
  const survey_results_doc = require("../data/rsp-survey-result-documents.json");
  const survey_results_detail = require("../data/rsp-survey-result-detail.json");

  app.post("/rsp/follow-up-vendor", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "OK"
    });
  });
  app.post("/rsp/follow-up-vendors", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "OK"
    });
  });

  app.get("/rsp/get-registered-vendor-amount", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "OK",
      "data": {
        "registered_vendor_amount": 2
      }
    });
  });
  app.get("/rsp/get-rsp-report-data", async (req, res) => {
    await delay(2000);
    res.json(
      {
        "is_success": true,
        "code": 200,
        "message": "OK",
        "data": {
          "policy": {
            "completed_amount": 15,
            "completed_percentage": 75
          },
          "survey": {
            "completed_amount": 10,
            "completed_percentage": 50,
            "aligned_amount": 5,
            "aligned_percentage": 25
          },
          "training": {
            "completed_amount": 8,
            "completed_percentage": 40
          }
        }
      }
    );
  });
  app.get("/rsp/get-rsp-policy-results", async (req, res) => {
    await delay(2000);
    res.json(policy_results);
  });
  app.get("/rsp/get-rsp-survey-results", async (req, res) => {
    await delay(2000);
    res.json(survey_results);
  });
  app.get("/rsp/get-rsp-survey-result-detail", async (req, res) => {
    await delay(2000);
    res.json(survey_results_detail);
  });
  app.get("/rsp/get-rsp-survey-result-documents", async (req, res) => {
    await delay(2000);
    res.json(survey_results_doc);
  });
  app.get("/rsp/export-rsp-policy-by-vendor", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok",
      "data": {
          "bp_number": "12345678901000",
          "file_url":  "http://localhost:4000/dowload/test-pdf"
        }
    }
    );
  });
  app.get("/rsp/export-rsp-activity-report", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok",
      "data": {
          "file_url": "http://localhost:4000/dowload/test-pdf"
        }
    });
  });
  app.get("/rsp/export-rsp-policy-by-vendor/:id", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok",
      "data": {
          "bp_number": "12345678901000",
          "file_url": "http://localhost:4000/dowload/test-pdf"
        }
    });
  });
  app.get("/rsp/export-rsp-survey-by-vendor/:id", async (req, res) => {
    await delay(2000);
    res.json({
      "is_success": true,
      "code": 200,
      "message": "Ok",
      "data": {
          "bp_number": "12345678900001",
          "file_url": "http://localhost:4000/dowload/test-pdf"
        }
       }
    );
  });
};
