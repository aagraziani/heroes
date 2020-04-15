const express = require('express');
const router = express.Router();
const app = express();

const home = require('./routes/home.js');
const heroes = require('./routes/heroes.js');
const creditos = require('./routes/creditos.js');

app.listen(3000, () => console.log('Its aliveeeeee!'));

app.use('/', home);
app.use('/heroes', heroes);
//app.use('/creditos', creditos);
