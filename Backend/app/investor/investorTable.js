const { response } = require('express');
const pool = require('../../databasePool');

class InvestorTable{
    static setInvestor({investorId, fundedId, stocks, yearOfInvestment, shares, type}){
        return Promise((resolve, reject) =>{
            pool.query(
                `INSERT INTO investor("investorId", "fundedId", stocks, "yearOfInvestment", shares, "fundingType") VALUES $1, $2, $3, $4, $5, $6 RETURNING stocks`,
                [investorId, fundedId, stocks, yearOfInvestment, shares, type],
                (error, response) => {
                   if(error) return reject(error);

                   resolve(response.rows[0].stocks);
                }
            )
        });
    }
    static getFundedCompany({investorId}){
        return Promise((resolve, reject) => {
            pool.query(
                `SELECT "fundedId", stocks, "yearOfInvestment", shares, "fundingType" FROM investor WHERE "investorId" = $1`,
                [investorId],
                (error, response) => {
                    if(error) return reject(error);

                    if(response.rows.length === 0) return reject(new Error("No investment"));
                     
                    resolve(response.rows);
                }
            )
        })
    }
    static getInvestorCompany({fundedId}){
        return Promise((resolve, reject) =>{
            pool.query(
                `SELECT "investorId", stocks, "yearOfInvestment", shares, "fundingType" FROM investor WHERE "fundedId" = $1`,
                [fundedId],
                (error, response) => {
                    if(error) return reject(error);

                    if(response.rows.length === 0) return reject(new Error("No funding"));

                    resolve(response.rows);
                }
            )
        })
    }
    static deleteInvestor({fundedId, investorId}){
        return Promise((resolve, reject) =>{
            pool.query(
                `DELETE FROM TABLE investor WHERE "investorId" = $1 AND "fundedId" = $2`,
                [investorId, fundedId],
                (error, response) => {
                    if(error) return reject(error);

                    resolve();
                }
            )
        })
    }
}

module.exports = InvestorTable