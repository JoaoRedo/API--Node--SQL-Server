var config = require("./dbconfig");
const sql = require("mssql");

//testando a conexão com o SQL Server
async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("SQL Server conectado");
  } catch (error) {
    console.log("Erro: " + error);
  }
}

//Recuperando os dados de uma tabela do banco.
async function getdata_withQuery() {
  try {
    let pool = await sql.connect(config);
    let res = await pool.request().query("SELECT * FROM dbo.products");
    return res.recordsets;
  } catch (error) {
    console.log("Erro: " + error);
  }
}

module.exports = {
  getdata: getdata,
  getdata_withQuery: getdata_withQuery,
};
