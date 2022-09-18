const express = require('express')
const mongoose  = require('mongoose')
const ShortUrl = require()
const app = express('./models/shortUrl')

mongoose.connect('mongodb://localhost/urlShortener',{
  useNewUrlParser: true, useUnifiedTopology: true  
})

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('index')
})

app.post('/shortUrls', (req,res)=> {
   ShortUrl.create({ full: req.body.fullUrl })

})

app.listen(process.env.PORT || 5000);

