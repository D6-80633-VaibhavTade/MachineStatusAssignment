const express = require('express');
const mongoose = require('mongoose');
const machineDataRouter = require('./routes/machineData');

const app = express();
const PORT = process.env.PORT || 9000;

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/machineData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/machineData', machineDataRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
