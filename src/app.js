const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authRouter = require('./routes/auth.routes');
const taskRouter = require('./routes/task.routes');

const app = express();

app.use(morgan('combined'));

app.use(express.json());

app.use(cors());

/*app.use('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})*/

app.use('/api', authRouter);

app.use('/api/task', taskRouter);

module.exports = app;