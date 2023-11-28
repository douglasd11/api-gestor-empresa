const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: "*"
}))

//import conexion mongoDB
const archivoBD = require('./conexion')

// import bodyparser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

//import routes
const rNomina = require('./rutas/nomina')
const rProducto = require('./rutas/producto')

app.use('/api/nomina', rNomina)
app.use('/api/producto', rProducto)


const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.end('Bienvenido al backend')
})

//configurando servidor
app.listen(PORT, (req, res) =>{
    console.log('server running: 3001')
})