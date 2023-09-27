// Modules //
const Controller = require("./controller.js");
const express = require("express");

// API Endpoints //
const router = express.Router();

router.get("/pokemon", async (_, res) => {
  const randomPokemon = await Controller.Get();
  res.status(200).json(randomPokemon);
});

router.post("/pokemon", async (_, res) => {
  const randomPokemon = await Controller.Entry();
  res.status(200).json(randomPokemon);
});

router.post("/pokemon/discover", async (_, res) => {
  const randomPokemon = await Controller.Entry();
  res.status(200).json(randomPokemon);
});

router.get("/pokemon/:association", (_, res) => {
  const pokemonRes = Controller.GetOne();

  pokemonRes
    .then((pokemon) => {
      res.status(200).json(pokemon);
    })
    .catch((e) => {
      const error = JSON.parse(
        JSON.stringify(e, Object.getOwnPropertyNames(e))
      );
      if (error.message === "404") {
        res.status(404).json({
          message: "Pokémon not found...",
        });
      } else {
        console.error(e);
        res.json(e);
      }
    });
});

router.delete("/pokemon", async (_, res) => {
  const randomPokemon = await Controller.Entry();
  res.status(200).json(randomPokemon);
});

module.exports = router;
