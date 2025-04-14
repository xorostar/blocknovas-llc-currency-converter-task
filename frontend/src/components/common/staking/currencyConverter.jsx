import { useState } from "react";
import { useExchangeRate } from "../../../hooks/useExchangeRate";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("ETH");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const { currencies, loading, convertCurrency } = useExchangeRate();

  // Handle conversion
  const handleConversion = async () => {
    const result = await convertCurrency(amount, fromCurrency, toCurrency);
    if (result) {
      setConvertedAmount(result);
    }
  };

  return (
    <div className="w-full border border-slate-500 rounded-xl lg:px-6 px-3 py-5 relative bg-transparent flex flex-col gap-3 font-[VioletSans]">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-bold text-gray-200 bg-clip-text">
          Currency Converter
        </h1>
      </div>

      {/* Amount Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-400">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full bg-transparent border border-slate-500 rounded-lg p-2 text-gray-200 focus:outline-none focus:border-[#5AB0FF]"
          placeholder="Enter amount"
        />
      </div>

      {/* Currency Selection */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full bg-transparent border border-slate-500 rounded-lg p-2 text-gray-200 focus:outline-none focus:border-[#5AB0FF]"
          >
            {Object.entries(currencies).map(([code, currency]) => (
              <option key={code} value={code} className="bg-gray-800">
                {code} - {currency.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full bg-transparent border border-slate-500 rounded-lg p-2 text-gray-200 focus:outline-none focus:border-[#5AB0FF]"
          >
            {Object.entries(currencies).map(([code, currency]) => (
              <option key={code} value={code} className="bg-gray-800">
                {code} - {currency.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Convert Button */}
      <button
        onClick={handleConversion}
        disabled={loading || !amount}
        className="w-full clipButton font-[Nippo] h-[40px] text-[15px] mt-2"
      >
        {loading ? "Converting..." : "Convert"}
      </button>

      {/* Result Display */}
      {convertedAmount && (
        <div className="mt-2 text-center">
          <p className="text-gray-200">
            <span className="text-2xl font-bold">{convertedAmount}</span>
            <span className="ml-2 text-base font-bold">{toCurrency}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
