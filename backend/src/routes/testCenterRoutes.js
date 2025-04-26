const express = require('express');
const { getAllTestCenters, searchTestCentersByPostcode } = require('../services/testCenterService');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const centers = getAllTestCenters();
    res.json(centers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch test centers' });
  }
});

router.get('/search', (req, res) => {
  const { postcode } = req.query;

  if (!postcode || typeof postcode !== 'string') {
    return res.status(400).json({ error: 'Postcode is required' });
  }

  try {
    const centers = searchTestCentersByPostcode(postcode);
    res.json(centers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search test centers' });
  }
});

module.exports = router; 