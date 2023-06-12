const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(cors);

app.get('/',(req,res) => {
    res.send('asd')
})

app.listen(6000);