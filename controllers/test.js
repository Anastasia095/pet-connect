const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Serving test Page');
    res.render('hello', { name: 'Stranger', title: 'Hello Page' });
});

router.get('/test2', async (req, res) => {
    const url = 'https://www.petfinder.com/search/';
    const params = {
      page: 1,
      'limit[]': 40,
      status: 'adoptable',
    //   edit token
      token: 'RtS0E2HxvBT5IKfFXRKWPTI97g0cTNnw5EkZ2-cW3aU',
    //   edit distance
      'distance[]': 100,
    //   edit animal type
      'type[]': 'dogs',
      'sort[]': 'nearest',
    //   edit breed and location
      'breed[]': 'Golden Retriever',
      'location_slug[]': 'us/fl/orlando',
      include_transportable: true
    };
  
    const headers = {
      Host: 'www.petfinder.com',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15'
    };
    console.log("Sending parameters to Petfinder API:", req.query);
    try {
      const response = await axios.get(url, {
        params: params,
        headers: headers
      });
  
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching data from Petfinder:', error.message);
      res.status(500).json({ error: 'Failed to fetch data from Petfinder.' });
    }
  });

  router.get('/me', async (req, res) => {
    const userUrl = 'https://www.petfinder.com/user/me/';
  
    const headers = {
      Host: 'www.petfinder.com',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15'
    };
  
    try {
      const response = await axios.get(userUrl, {
        headers: headers,
      });
  
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching user data from Petfinder:', error.message);
      res.status(500).json({ error: 'Failed to fetch user data from Petfinder.' });
    }
  });
  

module.exports = router;
