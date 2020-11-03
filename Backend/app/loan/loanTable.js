const pool = require("../../databasePool");

class LoanTable{
    static setLoan({source, amount, rate, tenure, cid}){
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO loan(source, amount, rate, tenure, cid) VALUES($1, $2, $3, $4,$5)`,
                [source, amount, rate, tenure, cid],
                (error, response) => {
                    if(error) return reject(error);

                    resolve();
                }
            )
        })
    }
    static getLoan({cid}){
        return new Promise((resolve, reject) =>{
            pool.query(
                `SELECT source, amount, rate, tenure FROM loan WHERE cid = $1`,
                [cid],
                (error, response) => {
                    if(error) return reject(error);

                    resolve(response)
                }
            )
        })
    }
}