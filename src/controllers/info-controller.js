import Informacoes from '../models/informacoes'

export default class InfoController {

    info(callBack) {
        Informacoes.find({}, function (err, docs) {
            const [informacao] = docs;
            callBack({ _id: informacao._id, nome: informacao.nome, versao: informacao.versao});
        });
    }

}