class RandomDie {
    constructor(numSides) {
        this.numSides = numSides
    }

    rollOnce () {
        return 1 + Math.floor(Math.random() * this.numSides)
    }

    roll ({ numRolls}) {
        let output = []

        for (let i = 0; i < numRolls; i++) {
            output.push(this.rollOnce())
        }

        return output
    }
}

module.exports = RandomDie
