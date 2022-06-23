const Contenedor = require('../src/Contenedor')
const contenedor = new Contenedor()
    //muestra los productos
const getProducts = (req, res) => {
        const productos = contenedor.getAll()
        res.render('productos.hbs', { productos })
    }
    //redirecciona a /productos
const postProducts = (req, res) => {
        const { title, price, thumbnail } = req.body
        contenedor.newProduct(title, price, thumbnail)
        res.redirect('/productos')
    }
    //muestra productos renderizafdos
const showForm = (req, res) => {
    res.render('form.hbs')
}


module.exports = {
    getProducts,
    postProducts,
    showForm
}