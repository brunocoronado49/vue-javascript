// function saludar(nombre) {
//     return `hola ${nombre}`
// }

// saludar = true

const saludar = (xyz) => `Hola ${xyz}`

const nombre = 'Bruce'

// console.log(saludar(nombre))

const gerUser = () => ({uid: 'abc123', username: 'Bruce666'})

// console.log(gerUser())

const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Flash'
    }
]

const exists = heroes.some((heroe) => heroe.id === 3)
console.log(exists)

const find = heroes.find((heroe) => heroe.id === 1)
console.log(find)



