const express = require('express');
const mongoose = require('mongoose');

const app = express()
const port = 3001

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0');
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', () => console.log('Connection failed with - ',err));

app.use(express.json())

const newsRoutes = require('./routes/news')
app.use(newsRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))