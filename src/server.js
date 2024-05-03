
const express = require('express');
const connectDB = require('./config/db');
 
const app = express();

 
app.get('/', (req, res) => {
    res.status(200).json({message:'Hello, Express!'});
});
 
const port = 3000; 

app.listen(port, async() => {
    await connectDB();
    console.log(`Server is running on http://localhost:${port}`);
});

