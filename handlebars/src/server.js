const express = require('express')
const app = express()
const { engine } = require("express-handlebars")
const myRoutes = require('../routes/index')
const port = 8080
const path = require('path')
    //configuracion de manejo de directorios
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, '../views/layouts/index.hbs'),
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials')
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/public', express.static(`${__dirname}/public`))
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')
app.use('/', myRoutes)
app.listen(port, (err) => {
    if (err) {
        console.log(`Se produjo un error al iniciar el servidor: ${err}`)
    } else {
        console.log(`Servidor escuchando correctamente puerto: ${port}`)
    }
})