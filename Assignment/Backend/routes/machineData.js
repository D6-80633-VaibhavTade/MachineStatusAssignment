const express = require('express');
const MachineData = require('../models/DataMachine');

const router = express.Router();

// Route to fetch machine data
router.get('/', async (req, res) => {
  try {
    const data = await MachineData.find({});
    res.json(data);
  } catch (error) {
    console.error('Error fetching machine data:', error);
    res.status(500).json({ error: 'Error fetching machine data' });
  }
});

module.exports = router;
