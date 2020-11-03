class Loan{
    constructor({
        source,
        amount, 
        rate,
        tenure,
        cid
    } = {}){
        this.source = source,
        this.amount = amount,
        this.rate = rate,
        this.tenure = tenure,
        this.cid = cid
    }
}

module.exports = Loan