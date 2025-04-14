const ExchangeRateServices = require('../services/ExchangeRateServices');

// Get latest exchange rates
exports.getLatestRates = async (req, res) => {
    const rates = await ExchangeRateServices.getLatestRates();
    res.status(200).json(rates);
};

// Get list of supported currencies
exports.getSupportedCurrencies = async (req, res) => {
    const currencies = await ExchangeRateServices.getSupportedCurrencies();
    res.status(200).json(currencies);
};