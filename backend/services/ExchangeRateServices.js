/**
* Exchange Rate Service Module
* 
* This module provides services for fetching exchange rates and currency information
* using the currencyapi.com API. It handles latest rates, and supported currencies.
* 
* Functions:
* 
* 1. getLatestRates()
*    - Fetches the current exchange rates for all supported currencies.
*    - Uses USD as the base currency.
*    - Returns exchange rates with timestamp and success status.
*    - Throws InternalServerError if API request fails.
* 
* 2. getSupportedCurrencies()
*    - Retrieves a list of all supported currencies.
*    - Returns currency details including codes and names.
*    - Throws InternalServerError if API request fails.
* 
* Configuration:
* 
* - API_KEY: Environment variable for currencyapi.com authentication
* - BASE_URL: Base URL for the currencyapi.com API
* 
* Example Usage:
* 
* const ExchangeRateServices = require('./ExchangeRateServices');
* 
* // Get latest rates
* ExchangeRateServices.getLatestRates()
*   .then(rates => console.log(rates))
*   .catch(err => console.error(err));
* 
* // Get supported currencies
* ExchangeRateServices.getSupportedCurrencies()
*   .then(currencies => console.log(currencies))
*   .catch(err => console.error(err));
* 
*/

const axios = require('axios');
const { InternalServerError } = require('../utils/errors');

const API_KEY = process.env.EXCHANGE_RATE_API_KEY;
const BASE_URL = 'https://api.currencyapi.com/v3';

class ExchangeRateServices {
    static async getLatestRates() {
        try {
            const response = await axios.get(`${BASE_URL}/latest`, {
                headers: {
                    'apikey': API_KEY
                },
                params: {
                    base_currency: 'USD'
                }
            });
            
            return {
                success: true,
                timestamp: response.data.meta.last_updated_at,
                base: 'USD',
                rates: response.data.data
            };
        } catch (error) {
            throw new InternalServerError('Error fetching exchange rates: ' + error.message);
        }
    }

    static async getSupportedCurrencies() {
        try {
            const response = await axios.get(`${BASE_URL}/currencies`, {
                headers: {
                    'apikey': API_KEY
                }
            });
            
            return {
                success: true,
                currencies: response.data.data
            };
        } catch (error) {
            throw new InternalServerError('Error fetching supported currencies: ' + error.message);
        }
    }
}

module.exports = ExchangeRateServices; 