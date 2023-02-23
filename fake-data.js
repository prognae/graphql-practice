const UserList = [
    {
        id: 1,
        name: 'Nae',
        username: 'naenae',
        age: '21',
        nationality: 'FILIPINO',
        friends: [
            {
                id: 2,
                name: 'Czed',
                username: 'butsokoy',
                age: '22',
                nationality: 'ITALY'
            },
            {
                id: 3,
                name: 'Tin',
                username: 'martinpogi',
                age: '25',
                nationality: 'INDIAN'
            },
            {
                id: 4,
                name: 'Lee',
                username: 'allan',
                age: '22',
                nationality: 'BRAZIL'
            }
        ]
    },
    {
        id: 2,
        name: 'Czed',
        username: 'butsokoy',
        age: '22',
        nationality: 'ITALY',
        friends: [
            {
                id: 3,
                name: 'Tin',
                username: 'martinpogi',
                age: '25',
                nationality: 'INDIAN'
            },
            {
                id: 4,
                name: 'Lee',
                username: 'allan',
                age: '22',
                nationality: 'BRAZIL'
            }
        ]
    },
    {
        id: 3,
        name: 'Tin',
        username: 'martinpogi',
        age: '25',
        nationality: 'INDIAN',
        friends: [
            {
                id: 4,
                name: 'Lee',
                username: 'allan',
                age: '22',
                nationality: 'BRAZIL'
            },
            {
                id: 5,
                name: 'Bert',
                username: 'temp',
                age: '23',
                nationality: 'GERMAN'
            }
        ]
    },
    {
        id: 4,
        name: 'Lee',
        username: 'allan',
        age: '22',
        nationality: 'BRAZIL',
        friends: [
            {
                id: 5,
                name: 'Bert',
                username: 'temp',
                age: '23',
                nationality: 'GERMAN'
            }
        ]
    },
    {
        id: 5,
        name: 'Bert',
        username: 'temp',
        age: '23',
        nationality: 'GERMAN'
    },
];

const MovieList = [
    {
        id: 1,
        name: 'Avatar',
        inTheaters: false,
        director: {
            id: 4,
            name: 'Lee',
            username: 'allan',
            age: '22',
            nationality: 'BRAZIL',
            friends: [
                {
                    id: 5,
                    name: 'Bert',
                    username: 'temp',
                    age: '23',
                    nationality: 'GERMAN'
                }
            ]
        }
    },
    {
        id: 2,
        name: 'Hunger Games',
        inTheaters: false,
        director: {
            id: 5,
            name: 'Bert',
            username: 'temp',
            age: '23',
            nationality: 'GERMAN'
        }
    },
    {
        id: 3,
        name: 'Lion King',
        inTheaters: true,
        director: {
            id: 5,
            name: 'Bert',
            username: 'temp',
            age: '23',
            nationality: 'GERMAN'
        }
    }
]

module.exports = { UserList, MovieList }