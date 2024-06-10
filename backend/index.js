// import Express
const express = require('express');
const userRouter = require('./router/userRouter');
const companyRouter = require('./router/companyRouter');
const interviewRouter = require('./router/interviewRouter');
const utilRouter = require('./router/util');
const contactRouter = require('./router/contactRouter');
const feedbackRouter = require('./router/feedbackRouter');

const cors = require('cors');


// initializing express
const app = express();
const port = 5000;

// middleware
app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use(express.json());
app.use('/user', userRouter);
app.use('/company', companyRouter);
app.use('/jobpost', interviewRouter);
app.use('/util', utilRouter);
app.use('/feedback', feedbackRouter);
app.use('/contact', contactRouter);

app.use(express.static('./static/uploads'));

app.get('/add', (req, res)=> {
    res.send('Response from add');
});

app.listen(port, () => { console.log('server started'); });