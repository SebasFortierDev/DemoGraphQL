const { buildSchema } = require('graphql')

let schema = buildSchema(`
    type Query {
        random: Float!
        getDie(numSides: Int): RandomDie
        getMessage(id: ID!): Message
    }
    
    type Mutation {
        createMessage(input: MessageInput): Message
        updateMessage(id: ID!, input: MessageInput): Message
    }
    
    input MessageInput {
        content: String
        author: String
    }
    
    type Message {
        id: ID!
        content: String
        author: String
    }
    
    type RandomDie {
        numSides: Int!
        rollOnce: Int!
        roll(numRolls: Int!): [Int]
    }
`)

module.exports = schema
