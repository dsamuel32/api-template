import jwt from 'jwt-simple';

describe('Routes: Tasks', () => {
    const Users = app.config.db.models.Users;
    const jwtSecret = app.config.config.jwtSecret;
    let token;
    beforeEach((done) => {
        Users
            .destroy({ where: {} })
            .then(() => Users.create({
                name: 'John',
                email: 'john@mail.net',
                password: '12345',
            }))
            .then((user) => {
                token = jwt.encode({ id: user.id }, jwtSecret);
            done();
        });
    });
    describe('GET /user', () => {
        describe('status 200', () => {
            it('returns an authenticated user', (done) => {
                request.get('/user')
                .set('Authorization', `Bearer ${token}`)
                .expect(200)
                .end((err, res) => {
                    expect(res.body.name).to.eql('John');
                    expect(res.body.email).to.eql('john@mail.net');
                    done(err);
                });
            });
        });
    });
});
