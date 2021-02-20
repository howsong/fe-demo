const express = require("express");
const router = express.Router();
const db = require("../db");

// 一般文件上传
router.post("/common/upload", function (req, res, next) {
  const sql =
    "SELECT * FROM user WHERE phone = " + req.body.account + " AND password = " + req.body.password;
  db.query(sql, (err, result) => {
    if (err) {
      res.json({
        code: 500,
        message: err
      });
      return;
    }
    console.log(result, "----------");
    if (result.length === 0) {
      res.json({ code: -1, message: "用户名或密码错误" });
    } else {
      req.session.login = true;
      req.session.account = result[0].phone;
      res.json({ code: 1, message: "登录成功" });
    }
  });
});

module.exports = router;
