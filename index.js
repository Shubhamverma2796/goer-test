
const sql = require('mssql');

const config = {
    user : 'rohitreadonly',
    password: 'noida$$readonly',
    server : 'test-db.i2e1.in',
    database : 'i2e1',
    options: {
        trustedConnection : false,
        instancename : '13.235.255.22',
    },
    port : 1433
}


async function get(){
    try{
        let pool = await sql.connect(config);
        let x = await pool.request().query("create view v_test_table as select name as nm from test_table ");
        console.log(x);
    }
    catch (error) {
        console.log(error.message);
    }
}


get();
module.exports = config;

