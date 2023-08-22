const router = require('express').Router();
const crudController = require('../controllers/crud.controller');


router.get('/', crudController.Home);
router.post('/add/todo', crudController.insert);
router.get('/delete/:id', crudController.delete);
router.get('/delete2/:id', crudController.delete2);


module.exports = router;