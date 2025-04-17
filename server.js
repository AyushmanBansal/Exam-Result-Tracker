const express = require('express');
const app = express();

const { configDotenv } = require('dotenv');
const dBConnect = require('./middlewares/dB');
const resultRoutes = require('./routes/result');

app.use(express.json())
configDotenv()
dBConnect()

app.use('/', resultRoutes);


app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})