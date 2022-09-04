const path = require('path');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./Util/database');

const appointmentRoute = require('./Routes/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/appointments',appointmentRoute);

app.use(appointmentRoute);

app.use(async (req, res, next) => { 
    let url = req.url.split('/');
    console.log(url);
    if(url[url.length-1] === 'index.html' || url[url.length-1] === '') {
        res.sendFile(path.join(__dirname,'View','index.html'));
    }
});

sequelize.sync()
.then(res => {
    app.listen(3000);
})
.catch();
