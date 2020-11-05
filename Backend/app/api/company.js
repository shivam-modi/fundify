const {Router} = require('express');
const CompanyTable = require("../company/companytable");
const Company = require("../company/company");

const router = Router();

router.put("/newcompany", (req, res, next) => {
     Company = req.body;

     CompanyTable.storeCompany({Company})
        .then(({}) => res.json({message: "thanks for joining"}))
        .catch(error => next(error))
})

router.post("/company", (req, res, next) => {
    const {companyId} = req.body;

    CompanyTable.getCompany({companyId})
          .then(({Company}) => res.json({Company}) )
          .catch(error => next(error));
})

router.put('/update', (req, res, next) => {
    const {companyId, companyName, profit, growthRate, currentAsset, domain, popular} = req.body;
    
    CompanyTable.updateCompany({companyId, companyName, profit, growthRate, currentAsset, domain, popular})
              .then(({}) => res.json({message: "updated succesfully"}))
              .catch(error => next(error));
 })

 module.exports = router