import heroes, {owners} from './data/heroes'

// const [dc, marvel] = owners
// console.log(dc)
// console.log(marvel)

// console.log(heroes)

const getHeroeById = (id) => {
    const heroe = heroes.find((heroe) => heroe.id === id)
    return heroe.name
}
console.log(getHeroeById(2))

const getHeroesByOwner = (owner) => {
    const heroe = heroes.filter((heroe) => heroe.owner === owner)
    return heroe;
}

const [dc, marvel] = owners
console.log(getHeroesByOwner(dc))


