import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config.metaData = { startTime: performance.now() };
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  const { config } = response;

  console.log(
    `The request ${config.url} takes ${
      performance.now().toFixed(2) - config.metaData.startTime.toFixed(2)
    }ms`
  );

  return response;
});

const {
  data: { articles },
} = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = articles[0].content;
