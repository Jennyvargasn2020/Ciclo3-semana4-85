const routerx = require('express-promise-router');
const categoriaRouter = require('./categoria');
const articuloRouter = require('./articulo');



const router = routerx();

router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);

module.exports = router;