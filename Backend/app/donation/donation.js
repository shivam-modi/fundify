const DonationTable = require("./donationTable")

class Donation{
    constructor({
      did,
      amount,
      fId,
      yearOfDonation
    } = {}){
      this.did = did,
      this.amount = amount,
      this.fId = fId,
      this.yearOfDonation = yearOfDonation
    }
}

module.exports = Donation