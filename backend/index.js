require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { apiLimiter } = require('./middleware/rateLimiter');
const apiRoutes = require('./routes/api');

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(apiLimiter);
app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('The Bridge Restaurant API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
