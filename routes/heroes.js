const express = require('express');
const router = express.Router();


const heroesControlador = require('../controllers/heroesController.js');

router.get('/', heroesControlador.todosLosHeroes);

router.get('/detalle/:id', heroesControlador.heroeDetalle);

/*router.get('/heroes/bio/:id/ok?', heroesControlador.heroeBiografia);
*/
module.exports = router;