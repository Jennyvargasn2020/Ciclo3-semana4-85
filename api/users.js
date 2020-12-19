const router = require('express').Router();
const usercontroller = require('../../controllers/UserController.js');
const auth = require('../..Middleware/auth.js')

router.get('/list',auth.verificarVendedor,usercontroller.list);

//api/user/register//

router.post('/register',auth.verificarAdministrador, usercontroller.register);

router.post('/signin', usercontroller.signin);
router.put('/update',auth.verificarAdministrador, usercontroller.update);

module.exports = router;