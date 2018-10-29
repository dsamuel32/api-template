import Servidor from './config/servidor';
import informacoes from './routes/informacoes';
import comandos from './routes/comandos'

const routes = [informacoes, comandos];
new Servidor().start();