//all functions
const { UserList, MovieList } = require('../fake-data')
const _ = require('lodash')
const resolvers = {
    Query: {
        users: () => {
            //if database is present, here is where you make queries to retrieve the data. use return
            
            return UserList
        },
        user: (parent, args) => {
            const id = args.id
            const user = _.find(UserList, { id: Number(id) })

            return user
        },
        movies: () => { //returns all movies

            return MovieList
        },
        movie: (parent, args) => {
            const movieName = args.name
            const movie = _.find(MovieList, { name: movieName })

            return movie
        }
    }
}

module.exports = { resolvers }