module.exports = (app) => {
    
//    app.findById = id => {};

    app.info = () => {
        return { page: 'HOME API' };
    };

    return app;
};
