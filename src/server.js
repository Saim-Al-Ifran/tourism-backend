const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); 
const app = express();

app.use(express.json())
app.use(cors());
 
app.get('/', (req, res) => {
    res.status(200).json({message:'Hello, Express!'});
});
 
const port = 3000; 

app.listen(port, async() => {
    await connectDB();
    console.log(`Server is running on http://localhost:${port}`);
});

