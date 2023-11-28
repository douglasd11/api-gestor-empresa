const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemarol = new schema({
    id: Number,
    idserial: String,
    nombre: String,
    categoria: String,
    imagen: String,
    modelo: String,
    serie: String,
    marca: String,
    fabricante: String
})

const ModeloProducto = mongoose.model('productosE', schemarol)
module.exports = router

router.post('/agregarProducto', (req, res) => {
    
    const nuevoproducto = new ModeloProducto({
        id: req.body.id,
        idserial: req.body.idserial,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        imagen: req.body.imagen,
        modelo: req.body.modelo,
        serie: req.body.serie,
        marca: req.body.marca,
        fabricante: req.body.fabricante
    })

    nuevoproducto.save()
    res.send('guardado correctamente')
})


router.get('/obtenerProductos', async (req, res) => {

    const doc = await ModeloProducto.find()
    res.send(doc)
})

router.put('/actualizarProducto', async (req, res) => {

    await ModeloProducto.findOneAndUpdate({id: req.body.id}, {
        idserial: req.body.idserial,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        imagen: req.body.imagen,
        modelo: req.body.modelo,
        serie: req.body.serie,
        marca: req.body.marca,
        fabricante: req.body.fabricante
    })

    console.log('Actualizando prod')
    
    res.send('actualizado correctamente')
})

router.delete('/borrarProducto', async (req, res) => {
    
    await ModeloProducto.findOneAndDelete({id: req.body.id})
    res.send('Eliminado correctamente')
})



