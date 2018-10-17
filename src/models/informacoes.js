import mongoose from 'mongoose';

function createInformacoesSchema() {

    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;
    const InfoSchema = new Schema({
        id: ObjectId,
        nome: String,
        versao: String
    });
    
    return mongoose.model('informacoes', InfoSchema);
}

export default createInformacoesSchema();