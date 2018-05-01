module.exports = (app) => {
//    app.findById = id => {};

  app.info = () => ({ page: 'HOME API' });

  return app;
};
