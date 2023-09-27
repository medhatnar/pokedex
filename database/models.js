const { DataTypes } = require("sequelize");

module.exports = (db) => {
  const Pokemon = db.define("pokemon", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    media: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  const Type = db.define("type", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokemonId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  });

  return {
    Pokemon,
    Type
  };
};
