const Router = require("express");
const LoanTable = require("../loan/loanTable");

const router = new Router();

router.post('/loan', (req, res, next) => {
    const {companyId} = req.body;

    LoanTable.getLoan({companyId})
          .then(({loanData}) => res.json({loanData}))
          .catch(error => next(error));
})


router.put('/newloan', (req, res, next) => {
    const {source, amount, rate, tenure, cid} = req.body;

    LoanTable.setLoan({source, amount, rate, tenure, cid})
          .then(() => {res.json({message: "loan amount recieved"})})
          .catch(error => next(error));
})

