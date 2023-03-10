const mongoose = require("mongoose")

const collectionUsuario = "Usuario";

const schemaUsuario = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    direccion: String,
    numero: String,
    foto: String
});

const modelsUsuario = mongoose.model(collectionUsuario, schemaUsuario);

module.exports= modelsUsuario