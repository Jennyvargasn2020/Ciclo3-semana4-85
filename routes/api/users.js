const router = require('express').Router();
const usercontroller = require('../../controllers/UserController.js');
const auth = require('../../Middlewares/auth.js')

router.get('/list',auth.verificarAdministrador,usercontroller.list);
router.put('/update',auth.verificarAdministrador, usercontroller.update);
router.post('/register',auth.verificarAdministrador, usercontroller.register);


//api/user/register//


router.post('/login', usercontroller.login);


module.exports = router;