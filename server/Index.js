const express = require('express');
const mongoose =require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();


// app
app.use(express.json());
app.use(cors())
// app.use(express.urlencoded({extended:false}));

app.use('/',require('./routes/mainRoutes'));

mongoose.connect(process.env.MONGO_URI,()=>{
    console.log('DB connected =>', process.env.MONGO_URI);
})

const PORT =  process.env.PORT || 5000 
app.listen(PORT,()=>{
    console.log('server started on port '+ PORT );
})