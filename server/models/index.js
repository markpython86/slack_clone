import Sequelize from 'sequelize';
const sequelize = new Sequelize('slack', 'postgres', 'postgres')
const models = {
  User: sequelize.import('./users'),
  Team: sequelize.import('./team'),
  Channel: sequelize.import('./channel'),
  Message: sequelize.import('./message'),
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
