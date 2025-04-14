const express = require('express');
const router = express.Router();
const ExchangeRateController = require('../controllers/ExchangeRateController');

router.get('/latest', ExchangeRateController.getLatestRates);
router.get('/currencies', ExchangeRateController.getSupportedCurrencies);

module.exports = router;

