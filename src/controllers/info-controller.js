import { version, name } from '../../package.json';

export default class InfoController {

    info() {
        return { name, version };
    }

}