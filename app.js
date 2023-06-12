//importar los middlewares
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

//middlewares 
app.use(express.json());
app.use(morgan('combined'));
app.use(helmet());
app.use(cors());
app.use('/', require('./routes/router'));

//poner el servidor en marcha
app.listen(6000, ()=> {
    console.log('servidor funcionando en http://localhost:6000');
});