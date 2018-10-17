import Servidor from './config/servidor';
import info from './routes/info';

const routes = [info];
new Servidor(routes).start();