const Router = require("express");
const InvestorTable = require("../investor/investorTable");

const router = Router();

router.put("newInvestor", (req, res, next) => {
    const {investorId, fundedId, stocks, yearOfInvestment, shares, type} = req.body;

    InvestorTable.setInvestor({investorId, fundedId, stocks, yearOfInvestment, shares, type})
              .then(({}) => res.json({message: "investment done"}))
              .catch(error => next(error));
})

router.post("/investor", (req, res, next) => {
    const {fundedId} = req.body;

    InvestorTable.getInvestorCompany({fundedId})
           .then(({companies}) => res.json({companies}))
           .catch(error => next(error));
})

router.post("/invests", (req, res, next) => {
    const {investorId} = req.body;

    InvestorTable.getFundedCompany({investorId})
         .then(({icompanies}) => res.json({icompanies}))
         .catch(error => next(error));
})

router.delete("/release", (req, res, next) => {
   const {fundedId, investorId} = req.body;
   //TODO FOR RETURN MONEY ON DELETE 
   InvestorTable.deleteInvestor({fundedId, investorId})
      .then(() => res.json({message: "investor removed"}))
      .catch(error => next(error));
})

module.exports = router