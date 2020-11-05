const Router = require("express");
const DonationTable = require("../donation/donationTable");

const router = Router();

router.put("/newdonation", (req, res, next) => {
    const {nonOwnerId, amount, fId, yearOfDonation} = req.body;

    DonationTable.storeDonation({nonOwnerId, amount, fId, yearOfDonation})
            .then(({}) => res.json({message: "donation done"}))
            .catch(error => next(error));

})

router.post("/donatiuon", (req, res, next) => {
    const {cId} = req.body;

    DonationTable.getDonar({cId})
         .then(({donations}) => res.json({donations}))
         .catch(error => next(error));
})

router.post("/drawee", (req, res, next) => {
    const {nonOwnerId} = req.body;
    
    DonationTable.getFunded({nonOwnerId})
         .then(({acceptors}) => res.json({acceptors}))
         .catch(error => next(error))
})

module.exports = router;