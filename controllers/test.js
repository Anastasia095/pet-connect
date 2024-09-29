const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Serving test Page');
    res.render('hello', { name: 'Stranger', title: 'Hello Page' });
});

router.get('/test2', async (req, res) => {
    const tokenUrl = 'https://www.petfinder.com/user/me/';
  
    const tokenHeaders = {
      Host: 'www.petfinder.com',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15'
    };
    var token = "";
    try {
      const tokenResponse = await axios.get(tokenUrl, {
        headers: tokenHeaders,
      });
      token = tokenResponse.data.token;
      console.log(tokenResponse.data.token)
    //   res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching user data from Petfinder:', error.message);
      res.status(500).json({ error: 'Failed to fetch user data from Petfinder.' });
    }


    const url = 'https://www.petfinder.com/search/';
    const params = {
      page: 1,
      'limit[]': 40,
      status: 'adoptable',
      token: token,
      'distance[]': req.query.distance,
      'type[]': req.query.animal,
      'sort[]': 'nearest',
      'breed[]': req.query.breed,
      'location_slug[]': req.query.country + '/' + req.query.state + '/' + req.query.city,
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
    //   console.log(response.data.result.animals[0]);

      const serializedData = {
        name: response.data.name,
        animals: response.data.result.animals.map(item => ({
            breed: item.animal.breeds_label, 
            location: item.location,
            name: item.animal.name,
            photo_url: item.animal.primary_photo_url
            // Add other relevant properties as needed
        })),
     
    };
    // console.log("dddddddddddddddddddddddddd");
 
    var result = serializedData.animals;
    console.log(result[0]);
    res.render('search', { result }); 
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
