const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config');
const app = express();

app.use(express.json());

app.use(cors());
app.listen('/',(req,res)=>res.send('User Management Syatem is Running'));
app.use('/api/user', require('./routes/user.route.js'));
app.use('/api/product', require('./routes/product.route.js'));  
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})