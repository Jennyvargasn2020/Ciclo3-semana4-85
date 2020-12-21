const router = require('express').Router();
const usercontroller = require('../../controllers/UserController.js');
const auth = require('../../Middlewares/auth.js')

router.get('/list',usercontroller.list);
router.put('/update', usercontroller.update);
router.post('/register', usercontroller.register);


//api/user/register//


router.post('/login', usercontroller.login);


module.exports = router;