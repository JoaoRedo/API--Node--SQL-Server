var express = require("express");
const { connect } = require("mssql");
var router = express.Router();
const sql = require("../dboperation");

//home page
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//diretório de teste da conexão
router.get("/testconnect", function (req, res, next) {
  sql.getdata();
  res.render("index", { title: "Express" });
});

//diretório de visualização do retorno do banco de dados.
router.get("/getdata_withQuery", function (req, res, next) {
  sql.getdata_withQuery().then((result) => {
    res.json(result[0]);
  });
});

module.exports = router;
