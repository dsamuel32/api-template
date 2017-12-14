import passport from "passport";
import {Strategy, ExtractJwt} from "passport-jwt";

module.exports = app => {
console.log('>>>', app.db)
const Users = app.config.db.models.Users;
const cfg = app.config.config;

const params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const strategy = new Strategy(params, (payload, done) => {
    Users.findById(payload.id)
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