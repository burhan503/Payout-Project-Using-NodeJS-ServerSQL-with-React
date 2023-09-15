// const sql = require("mssql/msnodesqlv8");
var config ={
    user:'sa',
    password:'123456',
    server:"DESKTOP-RN7CVEF",
    database:"NETNETADMIN",
    driver:"msnodesqlv8",
    options:{
        trustedConnection:true,
        enableArithAbort:true,
    }
}
 module.exports = config;
// sql.connect(config,function(err){
//     if(err)console.log(err);
//     var request = new sql.Request();
//     request.query("select * from dbo.Payout",function(err,records){
//         if(err)console.log(err);
//         else console.log(records)
//     })
// })