const pool = require("../../databasePool");

class nonOwner{
    static setAccount({usernameHash, passwordHash, funds}){
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO nonCeo("usernameHash", "passwordHash", funds) VALUES($1, $2, $3) RETURNING id`,
                [usernameHash, passwordHash, funds],
                (error, response) => {
                    if(error) return reject(error);

                    resolve(response.rows[0].id);
                }
            )
        });
    }
    static getAccount({usernameHash}){
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT id, "passwordHash", funds FROM nonOwner WHERE usernameHash = $1`,
                [usernameHash],
                (error, response) => {
                    if(error) return reject(error);

                    resolve({account: response.rows[0]});
                }
            )
        })
    }
    static updateFunds({accountId, fundValue}){
        return new Promise((resolve, reject) => {
            pool.query(
                `UPDATE nonCeo SET funds = $1 WHERE id = $2`,
                [fundValue, accountId],
                (error, response) => {
                    if(error) return reject(error);

                    resolve();
                }
            )
        })
    }
}

module.exports = nonOwner;