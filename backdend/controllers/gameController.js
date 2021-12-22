//Metodos que consumen la base de datos
const { response } = require('express');
const pool = require('../pool');
const sql = require('../sql/gameQueries')


// Metodo que me muestra los elementos en la base de datos
exports.getGames = async (req, res) => {
  try {
    pool.query("SELECT * FROM games", (err, response) => {
      if (err)
        console.log(err);
      if (response) {
        res.json(response);
        console.log("this is the response", response)
      }
      res.end();
    })
  } catch (error) {
    return res.json(error)
  }
}

//Juego por id
exports.getById = async (req, res) => {
  let id = req.params.gameId
  try {
    pool.query(`SELECT * FROM games WHERE id = '${id}'`, (err, response) => {
      if (err)
        console.log(err);
      if (response) {
        res.json(response);
        console.log("this is the response", response)
      }
      res.end();
    })
  } catch (error) {
    return res.json(error)
  }
}

//AGREGAR UN NUEVO JUEGO
exports.createGame = async (req, res) => {
  let game = req.body
  try {
    pool.query(`INSERT INTO games(Place, Address, Mode, Players, DateTime)
    VALUES(
      '${game.Place}',
      '${game.Address}',
      '${game.Mode}',
      '${game.Players}',
      '${game.DateTime}'
    )`, (err, response) => {
      if (err)
        console.log(err);
      if (response.length)
        res.json({ success: "game create" }, response);
      res.end();
    })
  } catch (error) {
    return res.json(error)
  }
}

// Actualizar juego
exports.updateGame = async (req, res) => {
  let id = req.params.gameId;
  let game = req.body;
  try {
    pool.query(`UPDATE games SET
    Place = '${game.Place}',
    Address = '${game.Address}',
    Mode = '${game.Mode}',
    Players = ${game.Players},
    DateTime = '${game.DateTime}'
    WHERE id = ${id}
    `, (err, response) => {
      if (err)
        console.log(err)
      if (response)
        res.json("game updated");
      res.end();
    })
  } catch (error) {
    return res.json({ error: "Game was not table to get update" })
  }
}

exports.deleteGame = async (req, res) => {
  let id = req.params.gameId;
  try {
    pool.query(`DELETE FROM games WHERE id = '${id}'`, (err, response) => {
      if (err)
        console.log(err);
      if (response)
        res.json({ success: 'game delete' })
      res.end();
    })
  } catch (error) {
    return res.json({ error: 'partido no encontrado' })
  }
}