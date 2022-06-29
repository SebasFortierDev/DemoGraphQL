const { buildSchema } = require('graphql')

let schema = buildSchema(`
    type RandomDie {
        numSides: Int!
        rollOnce: Int!
        roll(numRolls: Int!): [Int]
    }

    type Query {
        random: Float!
        getDie(numSides: Int): RandomDie
    }
`)

module.exports = schema
