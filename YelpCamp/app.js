const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
//const methodOverride = require('method-override')

app.get('/', (req,res)=>{
    res.send("new mwe")
})






app.listen(3000,()=>{
    console.log('sucsex')
})