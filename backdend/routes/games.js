const express = require('express');
const router = express.Router();

const { getGames, getById, createGame, updateGame, deleteGame } = require('../controllers/gameController');


router.get('/', getGames);
router.get('/:gameId', getById);
router.post('/create', createGame);
router.post('/update/:gameId', updateGame)
router.delete('/delete/:gameId', deleteGame)

module.exports = router;