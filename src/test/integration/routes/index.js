describe('Routes: Index', () => {
    describe('GET /home', () => {
    it('Should returns API HOME', (done) => {
        request.get('/home')
        .expect(200)
        .end((err, res) => {
            const expected = { status: 'HOME API' };
            expect(res.body).to.eql(expected);
            done(err);
        });
    });
    });
});
