import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import UserController from '../controllers/userController';
import cfg from '../config/config';

export default (app) => {
    
    const params = {
        secretOrKey: cfg.jwtSecret,
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
        authenticate: () => passport.authenticate('jwt', cfg.jwtSession),
    };
};
