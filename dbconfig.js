//configuração das credenciais de acesso ao banco de dados
const config = {
  user: "sa",
  password: "xpmsv",
  server: "localhost",
  database: "projeto2",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    trustServerCertificate: true, //necessário para não dar problema de certificado
    instancename: "",
  },
  port: 49693, //a porta está em "Sql Server Configuration Manager / Configuração de Rede do SQL Server / Protocolos para SQLEXPRESS / TCP/IP / Propriedades / Endereços IP / IPAII / Porta TCP"
};

module.exports = config;
