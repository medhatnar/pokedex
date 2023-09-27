// Modules //
const db = require("./database/database.js");
const Pokemon = db.models.pokemon;
const Type = db.models.type;

const Entry = async ({ pokemon }) => {
  const entry = await Pokemon.create({
    name: pokemon.name,
    media: pokemon.sprite,
    order: pokemon.order,
  });

  await Type.create({
    name: pokemon.type,
    pokemonId: pokemon.id,
  });

  return entry;
};

const Get = async () => {
  const pokemons = await Pokemon.findAll();
  // sort by order #
  return pokemons;
};

const GetOne = async ({ association }) => {
  const byOrder = typeof association === Number;
  const field = byOrder ? 'order' : 'name';

  const pokemon = await Pokemon.findOne({
    where: {
      [field]: association,
    },
  });

  return pokemon;
};

const Random = async () => {
  let randomNumber;
  const pokemon = await Pokemon.findOne({
    where: {
        order: randomNumber
    }
  });

  return pokemon;
};

const Delete = async ({ id }) => {
  const pokemon = await Pokemon.findOne({
    where: {
      id,
    },
  });

  await Type.destroy({
    where: {
      pokemonId: id,
    },
  });

  await Pokemon.destroy({
    where: {
      id,
    },
  });

  return pokemon;
};

module.exports = { Entry, Get, GetOne, Random, Delete };
