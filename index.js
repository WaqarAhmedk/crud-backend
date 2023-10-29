const express = require('express');
const connectDb = require('./config/dbconfig');
const productRoutes = require('./routes/create');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(cors())
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())

app.use('/product', productRoutes);






const portName = process.env.PORTNAME || '4000';

app.listen(portName, () => {
    console.log('Server is  runming on port ', +portName)
})
connectDb();