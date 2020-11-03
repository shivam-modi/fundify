const pool = require('../../databasePool');
const {response} = require('express');

class CompanyTable{
    static storeCompany(company){
        const {cname, profit, growthrate, assets, domain, popularProduct, ceoId} = company;
        return new Promise((resolve, reject) =>{
            pool.query(`INSERT INTO corporation("companyName", profit, "ownerId", "growthRate", "currentAsset", domain, popular) 
                 VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING "companyId"`,
                  [cname, profit, ceoId, growthrate, assets, domain, popularProduct],
                  (error, response) => {
                      if(error) return reject(error);

                      const companyId = response.rows[0].companyId;
                      resolve({companyId});
                  })
        });    
    }

    static getCompany({companyId}){
        return new Promise((resolve, reject) => {
            pool.query(`SELECT "companyName", profit, "ownerId", "growthRate", "currentAsset", domain, popular
                    FROM corporation WHERE "companyId" = $1`,
                     [companyId],
                     (error, response) => {
                         if(error) return reject(error);

                         if(response.rows.length === 0) return reject(new Error("no company found"));

                         resolve(response.rows[0]);
                     })
        })
    }

    static updateCompany({companyId, companyName, profit, growthRate, currentAsset, domain, popular}){
        const changesMap = {companyName, profit, growthRate, currentAsset, domain, popular};

        const validQueries = Object.entries(changesMap).filter(([changeKey, changeValue]) => {
            console.log("changekey", changeKey, "changeValue", changeValue);

            if(changeValue !== undefined){
                return new Promise((resolve, reject) => {
                    pool.query(
                        `UPDATE corporation SET "${changeKey}" = $1 WHERE "companyId" = $2`,
                        [changeValue, companyId],
                        (error, response) => {
                            if(error) return reject(error);

                            resolve();
                        }
                    )
                });
            }
        });
        return Promise.all(validQueries);
    }
}

module.exports = CompanyTable;