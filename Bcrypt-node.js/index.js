const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({quiet: true  });

mongoose.connect(process.env.MONGO_URL)

.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

const app = express();
app.use(express.json());

app.use('./api/auth', require('./routes/auth.route'));
// app.use('./api/user', require('./routes/user.route'));

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on port ${process.env.PORT}`);
})