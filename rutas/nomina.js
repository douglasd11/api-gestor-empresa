const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemanomina = new schema({
    id: Number,
    nombre: String,
    apellido: String,
    foto: String,
    correo: String,
    direccion: String,
    cargo: String,
    salario: String
})

const ModeloNomina = mongoose.model('nominas', schemanomina)
module.exports = router

router.post('/agregarNomina', (req, res) => {
    
    const nuevanomina = new ModeloNomina({
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        foto: req.body.foto,
        correo: req.body.correo,
        direccion: req.body.direccion,
        cargo: req.body.cargo,
        salario: req.body.salario
    })

    nuevanomina.save()
    res.send('guardado correctamente')
})


router.get('/obtenerNominas', async (req, res) => {

    const doc = await ModeloNomina.find()
    res.send(doc)
})


router.put('/actualizarNomina', async (req, res) => {
    
    await ModeloNomina.findOneAndUpdate({id: req.body.id}, {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        foto: req.body.foto,
        correo: req.body.correo,
        direccion: req.body.direccion,
        cargo: req.body.cargo,
        salario: req.body.salario
    })
    
    res.send('actualizado correctamente')
})

router.delete('/borrarNomina', async (req, res) => {
    
    await ModeloNomina.findOneAndDelete({id: req.body.id})
    res.send('Eliminado correctamente')
})



