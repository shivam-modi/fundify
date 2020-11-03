class Company{
    constructor({
       companyId,
       companyName,
       ownerId,
       profit,
       growthRate,
       currentAsset,
       fundsRequire,
       domain,
       popular
    } = {}){
        this.companyId = companyId,
        this.companyName = companyName,
        this.ownerId = ownerId,
        this.profit = profit,
        this.growthRate = growthRate,
        this.currentAsset = currentAsset,
        this.domain = domain,
        this.fundsRequire = fundsRequire,
        this.popular = popular
    };
}

module.exports = Company;