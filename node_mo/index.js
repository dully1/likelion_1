const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://samoht:qwe789123@cluster0.gpwd2g7.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() =>console.log('MongoDB Connetcted...'))
.catch(err=>console.log(err))




app.get('/', (req, res) => {res.send('Hello World!~안녕하세요')})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})