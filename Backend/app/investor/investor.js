class Investor{
    constructor({
        investorId,
        fundedId, 
        stocks,
        yearOfInvestment,
        shares,
        fundingType
    } = {}){
        this.investorId = investorId,
        this.fundedId  = fundedId,
        this.stocks = stocks,
        this.yearOfInvestment = yearOfInvestment,
        this.shares = shares,
        this.fundingType = fundingType
    }
}

module.exports = Investor;