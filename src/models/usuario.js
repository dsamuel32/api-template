import mongoose from 'mongoose';

module.exports = () => {
    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;
    const UsuarioSchema = new Schema({
        id: ObjectId,
        nome: String,
        email: String,
    });

    return mongoose.model('usuario', UsuarioSchema);
}