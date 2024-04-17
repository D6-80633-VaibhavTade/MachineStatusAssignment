const mongoose = require('mongoose');

const machineDataSchema = new mongoose.Schema({
  ts: String,
  machine_status: Number,
  vibration: Number,
});

const MachineData = mongoose.model('MachineData', machineDataSchema);

module.exports = MachineData;
