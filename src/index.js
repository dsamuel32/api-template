import Servidor from './config/servidor';
import informacoes from './routes/informacoes';

const routes = [informacoes];
new Servidor(routes).start();