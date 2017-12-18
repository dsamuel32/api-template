import passport from "passport";
import {Strategy, ExtractJwt} from "passport-jwt";

module.exports = app => {
    
    const userController = app.controllers.userController;
    const cfg = app.config.config;

    const params = {
        secretOrKey: cfg.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer')
    };

    const strategy = new Strategy(params, (payload, done) => {
        userController.findById(payload.id)
            .then(user => {
                if (user) {
                    return done(null, {
                        id: user.id,
                        email: user.email
                    });
                }
                return done(null, false);
            })
            .catch(error => done(error, null));
    });

    passport.use(strategy);

    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};