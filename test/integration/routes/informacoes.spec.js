describe('Routes: Info', () => {
    describe('GET /informacoes', () => {
        it('Deve retornar os dados do sistema', (done) => {
            request.get('/informacoes')
                .expect(200)
                .end((err, res) => {
                    const experado = { nome: 'api-template', versao: '1' };
                    const resposta = { nome: res.body.nome, versao: res.body.versao };
                    expect(experado).to.eql(resposta);
                    done(err);
                });
        });
    });
});