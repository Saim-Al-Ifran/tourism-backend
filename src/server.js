const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); 
const TouristSpot = require('./models/TouristSpot');
const app = express();

app.use(express.json())
app.use(cors());
 
 
app.post('/tourist_spots',async(req,res)=>{
    try {
     
        const touristSpot = new TouristSpot(req.body);
        await touristSpot.save();
        res.status(201).json({ message: 'Tourist spot created successfully', data: touristSpot });

    } catch (error) {
        
        res.status(500).json({ message: 'Error creating tourist spot', error: error.message });
    }
});


app.get('/tourist_spots', async (req, res) => {
    try {
        let query = {};
        if (req.query.email) {
            query.user_email = req.query.email;
        }
        const touristSpots = await TouristSpot.find(query);
        res.json(touristSpots);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

 
const port = 3000; 

app.listen(port, async() => {
    await connectDB();
    console.log(`Server is running on http://localhost:${port}`);
});

