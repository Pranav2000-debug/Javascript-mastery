const axios = require('axios');

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
};

exports.fetchData = fetchData;
