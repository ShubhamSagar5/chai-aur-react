import axios from 'axios';

const convertCurrency = async (from, to, amount,setLoading) => {
  const options = {
    method: 'GET',
    url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
    params: {
      from: from,
      to: to,
      amount: amount
    },
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
    }
  };

  try {
    setLoading(true)
    const response = await axios.request(options);
    console.log(response);
    if(response){
      setLoading(false)
    }
    return response?.data?.result;
   
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default convertCurrency;