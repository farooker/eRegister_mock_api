/* eslint-disable no-undef */

module.exports = (app) => {
  const permission = require("../data/permission-data/permission.json");
  const permission_by_id = require("../data/permission-data/permission_by_id.json");

  app.get("/master/get-role-permissions", async (req, res) => {
    res.json(permission);
  });

  app.get("/master/get-role-permissions/:id", async (req, res) => {
    res.json(permission_by_id);
  });

  app.post("/master/update-role-permission", async (req, res) => {
    res.json({
      is_success: true,
      code: "201",
      message: "Updated",
      data: {
        role_id: 2,
        module: [
          {
            id: 1,
            name_th: "รายการคู่ค้า",
            name_en: "Business partner list",
            description: "",
            action: [
              {
                id: 1,
                name: "view",
                description: "",
              },
            ],
          },
          {
            id: 2,
            name_th: "ฟอร์มสมัครคู่ค้า",
            name_en: "Register form",
            description: "",
            action: [
              {
                id: 1,
                name: "view",
                description: "",
              },
            ],
          },
        ],
        updated_user_id: 1,
      },
    });
  });
};
