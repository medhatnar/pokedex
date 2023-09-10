// Modules //

const { GetRandom, GetPokemon } = require("./controller.js");
const express = require("express");

// API Endpoints //

const router = express.Router();

router.get("/pokemon", async (_, res) => {
  const randomPokemon = await GetRandom();
  res.status(200).json(randomPokemon);
});

router.get("/pokemon/:name", (req, res) => {
  const pokemonRes = GetPokemon();

  pokemonRes
    .then((pokemon) => {
      res.status(200).json(pokemon);
    })
    .catch((error) => {
      const errorJSON = JSON.parse(
        JSON.stringify(error, Object.getOwnPropertyNames(error))
      );
      if (errorJSON.message === "404") {
        res.status(404).json({
          message: "Pokémon not found...",
        });
      } else {
        console.error(error);
        res.json(error);
      }
    });
});

module.exports = router;
