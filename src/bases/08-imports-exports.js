import heroes from '../data/heroes'

// const [dc, marvel] = owners
// console.log(dc)
// console.log(marvel)

// console.log(heroes)

export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id)
}
// console.log(getHeroeById(2))

export const getHeroesByOwner = (owner) => {
    const heroe = heroes.filter((heroe) => heroe.owner === owner)
    return heroe
}

// const [dc, marvel] = owners
// console.log(getHeroesByOwner(dc))


