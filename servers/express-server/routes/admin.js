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
    if (result.length === 0) {
      res.json({ code: -1, message: "用户名或密码错误" });
    } else {
      req.session.login = true;
      req.session.account = result[0].phone;
      res.json({ code: 1, message: "登录成功" });
    }
  });
});
// 注册
router.post("/register", function (req, res, next) {
  const sql = "SELECT * FROM user WHERE phone = " + req.body.account;
  const insertSql =
    "INSERT INTO user (phone, password, nickname) VALUES (" +
    req.body.account +
    ", " +
    req.body.password +
    ", " +
    (req.body.nickname || null) +
    ")";

  db.query(sql, (err, result) => {
    if (err) {
      res.json({
        code: 500,
        message: err
      });
      return;
    }
    if (result.length === 0) {
      db.query(insertSql, (err, result) => {
        if (err) {
          res.json({
            code: 500,
            message: err,
            data: null
          });
          return;
        }
        console.log(result);
        res.json({ code: 1, message: "注册成功" });
      });
    } else {
      res.json({ code: -1, message: "该账号已注册" });
    }
  });
});

module.exports = router;
