const pool = require("../../databasePool");

class DonationTable{
    static storeDonation({nonOwnerId, amount, fId, yearOfDonation}){
        return Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO donation("dId", amount, "fId", "yearOfDonation") VALUES($1, $2, $3, $4)`,
                [nonOwnerId, amount, fId, yearOfDonation],
                (error, response) => {
                    if(error) return reject(error);

                    resolve();
                }
            )
        });
    }
    static getFunded({nonOwnerId}){
        return Promise((resolve, reject) =>{
            pool.query(
                `SELECT "dId", amount, "fId", "yearOfDonation" FROM donation WHERE "dId" = $1`,
                [nonOwnerId],
                (error, response) => {
                   if(error) return reject(error);
                   
                   if(response.rows.length === 0){
                      return reject(new Error("no funding"));
                   } 

                   resolve(response.rows);
                }
            )
        });
    }
    static getDonar({cId}){
        return Promise((resolve, reject) =>{
            pool.query(
                `SELECT "dId", amount, "fId", "yearOfDonation" FROM donation WHERE "fId" = $1`,
                [cId],
                (error, response) => {
                    if(error) return reject(error);

                    if(response.rows.length === 0) {
                        return reject(new Error("no donations"));
                    }

                    resolve(response.rows);
                }
            )
        })
    }
}

module.exports = DonationTable