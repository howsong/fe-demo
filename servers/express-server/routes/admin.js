var express = require("express");
var router = express.Router();
const db = require("../db");

// 登录
router.post("/login", function (req, res, next) {
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
      res.json({ code: 1, message: "登录成功" });
    }
  });
});

module.exports = router;
