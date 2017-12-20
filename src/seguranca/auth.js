import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

import UserController from '../controllers/userController';
import Config from '../config/config'
import db from '../config/db'

export default (app) => {

    const datasource = db(app);
    const userController = new UserController(datasource.models.Users);
    const config = new Config().getConfig();

    const params = {
        secretOrKey: config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    };

    const strategy = new Strategy(params, (payload, done) => {
        userController.findById(payload.id)
            .then((user) => {
                if (user) {
                    return done(null, {
                        id: user.id,
                        email: user.email,
                    });
                }
                return done(null, false);
            })
            .catch(error => done(error, null));
    });

    passport.use(strategy);

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', config.jwtSession),
    };
};
