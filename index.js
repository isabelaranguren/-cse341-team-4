
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .use(bodyParser({extended: false})) // For parsing the body of a POST
   .use('/', routes);
   // .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));
const io = require('socket.io')(server);
   
io.on('connection', (socket) => {
       console.log('Client connected');
       socket.on('new-name', () => socket.broadcast.emit('update-list'));
   });