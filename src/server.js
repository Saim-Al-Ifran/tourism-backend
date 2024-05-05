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


app.get('/tourist_spots/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const touristSpot = await TouristSpot.findById(id);
        if (!touristSpot) {
            return res.status(404).json({ message: "Tourist spot not found" });
        }
        res.json(touristSpot);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

 
app.put('/tourist_spots/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        
        const updatedTouristSpot = await TouristSpot.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedTouristSpot) {
            return res.status(404).json({ message: "Tourist spot not found" });
        }

        res.json(updatedTouristSpot);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


app.delete('/tourist_spots/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTouristSpot = await TouristSpot.findByIdAndDelete(id);
        if (!deletedTouristSpot) {
            return res.status(404).json({ message: "Tourist spot not found" });
        }
        res.json({ message: "Tourist spot deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

 
const port = 3000; 

app.listen(port, async() => {
    await connectDB();
    console.log(`Server is running on http://localhost:${port}`);
});

