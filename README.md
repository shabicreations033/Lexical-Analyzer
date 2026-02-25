FluxLEX: Advanced Lexical Analyzer Engine 🚀

FluxLEX is a high-performance, web-based Lexical Analyzer built to bridge the gap between low-level compiler construction and modern web aesthetics. Developed on Kali Linux, it utilizes the power of Flex (Fast Lexical Analyzer) for tokenization and Node.js for a premium user experience.

![alt text](https://img.shields.io/badge/UI-iOS--Glass--Morphism-blue)


![alt text](https://img.shields.io/badge/Engine-Flex--C-green)


![alt text](https://img.shields.io/badge/Backend-Node.js--Express-lightgrey)

✨ Features

Modern UI: Premium iOS-inspired Glass Morphism design with high-saturation blur effects.

Liquid Glass Buttons: Interactive mercury-style hover effects for a high-end feel.

Hybrid Architecture: Uses a C-based Flex engine for high-speed lexical analysis.

Error Detection: Real-time identification of illegal characters and malformed constants.

Persistence: Symbol tables are automatically saved to MongoDB for historical analysis.

🛠️ Tech Stack

Lexical Engine: Flex (C Library)

Backend: Node.js, Express.js

Database: MongoDB

Frontend: EJS, Bootstrap 5, Custom CSS3 (Glass Morphism)

Environment: Kali Linux

🚀 Getting Started
Prerequisites

Ensure you have the following installed on your Kali Linux machine:

Flex: sudo apt install flex

GCC: sudo apt install build-essential

Node.js: sudo apt install nodejs npm

MongoDB: sudo systemctl start mongodb

Installation

Clone the repository:

git clone https://github.com/shabicreations033/Lexical-Analyzer.git
cd Lexical-Analyzer

Install Node dependencies:

npm install

Compile the Lexical Engine:

flex cc_final.l
gcc lex.yy.c -o scanner_final
chmod +x scanner_final

Running the Project

Start the Node.js server:

node app.js

Open your browser and navigate to:
http://localhost:3000

📝 Example Code for Testing

You can use the following snippet to test all features including keywords, operators, and error handling:

int main() {
    int count = 10;
    float price = 99.95;
    string msg = "System Online";

    if (count > 5) {
        float total = count * price;
    }
    
    // Error Testing
    int $money = 500;  // Illegal '$'
    float val = 1.2.3; // Malformed float
    return 0;
}

📁 Project Structure

FluxLEX/
├── models/             # Mongoose schemas (MongoDB)
├── public/             # Glass Morphism CSS & Assets
├── views/              # EJS Templates (Index & Results)
├── app.js              # Express Server Logic
├── cc_final.l          # Flex Source File (Token Rules)
├── scanner_final       # Compiled Binary Engine
└── README.md           # Documentation

💻 Author

Shabi Creations
Semester Project - Compiler Construction
