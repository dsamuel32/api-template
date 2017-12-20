import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

let db = null;

export default (app) => {
    if (!db) {
        
        const config = app.config
        
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params,
        );
        db = {
            sequelize,
            Sequelize,
            models: {},
        };

        let fullPath = __dirname.replace('\config', '');
        const dir = path.join(fullPath, 'models');

        fs.readdirSync(dir).forEach((file) => {
                const modelDir = path.join(dir, file);
                const model = sequelize.import(modelDir);
                db.models[model.name] = model;
            });

        Object.keys(db.models).forEach((key) => {
            // db.models[key].associate(db.models);
            // db[modelName].associate(db);
        });

        sequelize.sync().done(() => db);

    }

  return db;
};
