const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const monitorRouter = require('./routes/monitor');


// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(monitorRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Port is on', port);
});
