const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/Authentication');

const UserRouter = require('./user')
const NyxcipherRouter = require('./nyxcipher')
const ItemRouter = require('./item')
const TicketRouter = require('./ticket')
const PaymentRouter = require('./payment')
const AuthRouter = require('./auth')
const ExchangeRateRouter = require('./exchange-rate');
const { ROLE } = require('../config/constant');

//------------ Welcome Route ------------//
router.get('/', AuthMiddleware([ROLE.CUSTOMER, ROLE.SPONSOR]), (req, res) => {
    res.status(200).send({data: 'Welcome Oasis'});
});

router.use('/user', UserRouter);
router.use('/nyxcipher', NyxcipherRouter);
router.use('/item', ItemRouter);
router.use('/ticket', TicketRouter);
router.use('/payment', PaymentRouter);
router.use('/auth', AuthRouter)
router.use('/exchange-rate', ExchangeRateRouter)

module.exports = router;