const express = require('express');
const mongoose = require('mongoose');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const Scan = require('./models/Scan');

const app = express();

mongoose.connect('mongodb://localhost:27017/compilerDB')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB Connection Error:', err));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/analyze', (req, res) => {
    const code = req.body.code;
    const tempPath = path.join(__dirname, 'uploads', 'temp_code.txt');
    const binaryPath = path.join(__dirname, 'scanner_final'); 

    fs.writeFileSync(tempPath, code);

    
    exec(`${binaryPath} ${tempPath}`, async (error, stdout, stderr) => {
        if (error || stderr) {
            const errorMsg = stderr || error.message;
            return res.render('result', { output: errorMsg, isError: true });
        }

        const newScan = new Scan({ sourceCode: code, symbolTable: stdout });
        await newScan.save();

        res.render('result', { output: stdout, isError: false });
    });
});

app.listen(3000, () => console.log(`Server started on http://localhost:3000`));
