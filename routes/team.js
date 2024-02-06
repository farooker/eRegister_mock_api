/* eslint-disable no-undef */

module.exports = (app) => {
  const team = require("../data/master-data/team.json");
  const team_by_id = require("../data/master-data/team_by_id.json");

  app.get("/master/get-teams", async (req, res) => {
    res.setHeader("Items-Offset", 0);
    res.setHeader("Items-Limit", 10);
    res.setHeader("Items-Total", 24);
    res.json(team);
  });

  app.get("/master/get-team/:id", async (req, res) => {
    res.json(team_by_id);
  });

  app.delete("/master/delete-team/:id", async (req, res) => {
    res.json({
      is_success: true,
      code: "200",
      message: "Deleted",
      data: {
        is_success: true,
        code: "200",
        message: "Ok",
        data: {},
      },
    });
  });

  app.post("/master/create-team", async (req, res) => {
    res.json({
      is_success: true,
      code: "201",
      message: "Created",
      data: {
        id: 30,
        company_id: {
          id: 1,
          company_code: "1000",
          name_th:
            "บริษัท แผ่นดินทอง พร็อพเพอร์ตี้ ดีเวลลอปเม้นท์ จำกัด (มหาชน)",
          name_en: "Golden Land Property Development PLC.",
          taxpayer_id_number: "0107537002273",
          address_th:
            "944 มิตรทาวน์ ออฟฟิศ ทาวเวอร์ ชั้นที่ 20 ถนนพระราม 4 แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330",
          address_en:
            "20th Floor, Mitrtown Office Tower 944 Rama 4 Road, Wangmai, Pathumwan, Bangkok 10330",
          business_unit: {
            id: 1,
            name_th: "Commercial",
            name_en: "Commercial",
            purchasing_organization: "GL00",
          },
          is_active: true,
          created_at: "2023-09-25T16:45:06Z",
          created_user_id: 1,
          updated_at: "2023-09-25T16:45:06Z",
          updated_user_id: 1,
        },
        name_th: "ทดสอบ1",
        name_en: "ทดสอบ1",
        is_active: true,
        created_at: "2024-01-28T09:52:59.415Z",
        created_user_id: 1,
        updated_at: "2024-01-28T09:52:59.415Z",
        updated_user_id: 30,
      },
    });
  });

  app.post("/master/update-team", async (req, res) => {
    const { company_id, name_th, name_en, is_active, team_id } = req.body;
    res.json({
      is_success: true,
      code: "200",
      message: "Updated",
      data: {
        is_success: true,
        code: "200",
        message: "Ok",
        data: {
          id: team_id,
          company_id,
          name_th,
          name_en,
          is_active,
          created_at: "2024-02-01T15:09:29.845Z",
          created_user_id: 1,
          updated_at: "2024-02-04T05:39:48.325Z",
          updated_user_id: 1,
        },
      },
    });
  });
};
