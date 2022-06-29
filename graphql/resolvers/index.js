const randomController = require('../../controllers/RandomController')
const diceController = require('../../controllers/DiceController')

module.exports = {
    random: randomController.randomNumber,
    getDie: diceController.getDie,
}
