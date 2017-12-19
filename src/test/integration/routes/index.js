describe('Routes: Index', () => {
    describe('GET /', () => {
    it('Should returns API HOME', (done) => {
        request.get('/')
        .expect(200)
        .end((err, res) => {
            const expected = { status: 'HOME API' };
            expect(res.body).to.eql(expected);
            done(err);
        });
    });
    });
});
