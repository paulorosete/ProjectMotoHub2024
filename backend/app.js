const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

require('dotenv/config');

app.use(cors());
app.options('*', cors())

//Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));



//Routes
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');

const api = process.env.API_URL;

app.use(`${api}/products`, productsRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/orders`, ordersRouter);


//Database
mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: 'motohub'
})
   
.then(()=>{
   
    console.log('Database connection is ready ....')
})
.catch((err)=>{
    console.log(err);
})

//server
app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})