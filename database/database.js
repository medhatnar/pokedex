const Sequelize = require("sequelize");
const models = require("./models");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

models(sequelize);

function applyAssociations(db) {
  const { pokemon, type } = db.models;

  pokemon.hasMany(type);
  type.hasMany(pokemon);

  return db;
}

const db = applyAssociations(sequelize);

module.exports = db;