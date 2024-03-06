const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');


const app = express();
app.set('view engine', 'ejs')

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', (req, res) => {
    res.render('home');
});


mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true})
.then(() => {
    app.listen(4545, () => {
        console.log('Application is ready to serve on port 4545');
    })
})
.catch(e => {
    console.log(e);
});