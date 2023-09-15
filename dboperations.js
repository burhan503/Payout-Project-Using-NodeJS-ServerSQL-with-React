var config = require('./dbconfig');
const sql = require('mssql/msnodesqlv8');

async function getOrders(){
try{
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * from dbo.tbl_PGFundWithdrawalRequest")
    return products.recordsets;
}
catch(error){
console.log(error)
}
}
module.exports={
    getOrders : getOrders
}