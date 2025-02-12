import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

export const useExchangeRate = () => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch supported currencies on hook mount
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axiosInstance.get('/exchange-rate/currencies');
        setCurrencies(response.data.currencies);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };
    fetchCurrencies();
  }, []);

  // Convert currency function
  const convertCurrency = async (amount, fromCurrency, toCurrency) => {
    if (!amount) return null;
    
    setLoading(true);
    try {
      const response = await axiosInstance.get('/exchange-rate/latest');
      const rates = response.data.rates;
      
      // Calculate conversion using rates
      const fromRate = rates[fromCurrency]?.value || 1;
      const toRate = rates[toCurrency]?.value || 1;
      const result = (amount * toRate) / fromRate;
      
      return result.toFixed(6);
    } catch (error) {
      console.error('Error converting currency:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    currencies,
    loading,
    convertCurrency
  };
}; 