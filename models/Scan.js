const mongoose = require('mongoose');

const ScanSchema = new mongoose.Schema({
    sourceCode: String,
    symbolTable: String, // Stores the complete text output of the scanner
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Scan', ScanSchema);
