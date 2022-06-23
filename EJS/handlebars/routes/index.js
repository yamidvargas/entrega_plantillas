const { Router } = require('express')
const router = Router()
const { getProducts, postProducts, showForm } = require('../controllers/productsControllers')

router.get('/', (req, res) => {
    res.redirect('/productos');

});

router.get('/productos', getProducts)
router.get('/crear', showForm)
router.post('/productos', postProducts)

module.exports = router