import mongoose from 'mongoose'

const pedidos = new mongoose.Schema({
    numero: String,
    valor: String
})

export default pedidos