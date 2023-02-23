const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
    }

    type Movie {
        id: ID!
        name: String!
        inTheaters: Boolean!
        director: User!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]! 
        movie(name: String!): Movie!
    }

    enum Nationality {
        FILIPINO
        INDIAN
        ITALY
        BRAZIL
        GERMAN
    }
`;
//NOTE: type queries with parameters of id is like a where clause in sql 

module.exports = { typeDefs }