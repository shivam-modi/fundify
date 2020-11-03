const pool = require("../../databasePool");
const {NEWACCOUNT} = null;

class OwnerTable{
    static storeAccount({usernameHash, passwordHash}) {
       return Promise((resolve, reject) => {
           pool.query(
               `INSERT INTO ceo("usernameHash", "passwordHash", "company") VALUES($1, $2, $3) RETURNING id`,
               [usernameHash, passwordHash, NEWACCOUNT],
               (error, response) => {
                   if(error) return reject(error);

                   const ownerId = response.rows[0].id;
                   resolve({ownerId});
               }
           )
       });       
    }
    
    static getAccount({usernameHash}){
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT id, "passwordHash", "companyId" from ceo WHERE "usernameHash" = $1`,
                [usernameHash],
                (error, response) =>{
                    if(error) return reject(error);

                    resolve({account: response.rows[0]})
                }
            )
        })
    }

    static updateAccount({userId, companyId}){
        return new Promise((resolve, reject) => {
            pool.query(
                `UPDATE ceo SET "companyId" = $1 WHERE id = $2`,
                [companyId, userId],
                (error, response) =>{
                    if(error) return reject(error);

                    resolve();
                }
            )
        }) 
    }
}

module.exports = OwnerTable;