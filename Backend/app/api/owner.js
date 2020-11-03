const {Router} = require('express');
const { user } = require('../../secrets/databaseConfiguration');
const { hash } = require('../account/helper');
const OwnerTable = require('../account/ownerTable');

const router = new Router();

router.post('/signup', (req, res, next) =>{
    const {username, password} = req.body;
    const usernameHash = hash(username);
    const passwordHash = hash(password);

    OwnerTable.getAccount({usernameHash})
       .then(({account}) => {
           if(!account){
               return OwnerTable.storeAccount({usernameHash, passwordHash});
           } else {
               const error = new Error('This username has already been taken');
               error.statusCode = 400;
               throw error;
           }
       })
         .then(() => {
             return setSession({username, res});
         })
          .then(({message}) => res.json({message}))
          .catch(error => next(error));
})

router.post('/login', (req, res, next) => {
    const {username, password} = req.body;

    OwnerTable.getAccount({usernameHash: hash(username)})
        .then(({account}) => {
            const {sessionId} = account;

            if(account && account.passwordHash === hash(password)){
                return setSession({username, res, sessionId});
            } else {
                const error = new Error('Incorrect username/password');
                error.statusCode = 409;
                throw error;
            }
        })
         .then(({message}) => res.json({message}))
         .catch(error => next(error));
})

router.get('/logout', (req, res, next) => {
    const {username} = Session.parse(req.cookies.sessionString);

    OwnerTable.updateSessionId({
        sessionId: null,
        usernameHash: hash(username)
    })
     .then(() => {
         res.clearCookie('sessionString');

         res.json({message: "Logout Successful"})
     })
     .catch(error => next(error));
})

router.get('/authenticated', (req, res, next) => {
    const {sessionString} = req.cookies;
    authenticatedAccount({sessionString})
       .then(({authenticated}) => res.json({authenticated}))
       .catch(error => next(error));
})