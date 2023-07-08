const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authRouter = require('./routes/auth.routes');
const taskRouter = require('./routes/task.routes');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(cors());

app.use('/api', authRouter);
app.use('/api/task', taskRouter)

module.exports = app;