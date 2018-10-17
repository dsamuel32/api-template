describe('Routes: Info', () => {
    describe('GET /info', () => {
        it('Deve retornar os dados do sistema', (done) => {
            request.get('/info')
                .expect(200)
                .end((err, res) => {
                    const experado = { 'name': 'api-template', 'version': '0.0.1' };
                    expect(res.body).to.eql(experado);
                    done(err);
                });
        });
    });
});