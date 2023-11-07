import axios from 'axios';

// Replace 'YOUR_API_KEY' with your API key from exchangeratesapi.io
const API_KEY = 'cur_live_M4Iy3VtWqvuYl5oYNs2qLugv15Soiq9FNiDA7cqc';
const API_BASE_URL = 'http://api.currencyapi.com/v3/latest?apikey=cur_live_M4Iy3VtWqvuYl5oYNs2qLugv15Soiq9FNiDA7cqc';

async function getExchangeRate(fromCurrency: string, toCurrency: string): Promise<number> {
  try {
    const response = await axios.get(`${API_BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`, {
      headers: {
        'apikey': API_KEY,
      },
    });

    const data = response.data;
    const rate = data.rates[toCurrency];
    if (!rate) {
      throw new Error(`Exchange rate not found for ${fromCurrency} to ${toCurrency}`);
    }

    return rate;
  } catch (error) {
    throw new Error(`Error getting exchange rate: ${error}`);
  }
}

async function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): Promise<number> {
  if (fromCurrency === toCurrency) {
    return amount; // No conversion needed if the currencies are the same.
  }

  const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
  return amount * exchangeRate;
}

async function main() {
  const amount = 100; // Change this to the amount you want to convert
  const fromCurrency = 'USD'; // Change this to the source currency
  const toCurrency = 'EUR'; // Change this to the target currency

  try {
    const result = await convertCurrency(amount, fromCurrency, toCurrency);
    console.log(`${amount} ${fromCurrency} is equal to ${result} ${toCurrency}`);
  } catch (error) {
    console.error(error);
  }
}

main();
