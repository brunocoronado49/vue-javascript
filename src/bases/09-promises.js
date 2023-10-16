import {getHeroeById} from './08-imports-exports'
// console.log('Inicio')

// new Promise((resolve, reject) => {
//     console.log('Promise body')
//     resolve('Promise resolved')
//     reject('Promise not resolved')
// }).then(console.log).catch(console.error)

// console.log('Fin')

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroeById(id)
            
            if (hero) resolve(hero)
            if (!hero) reject('Hero not exists')
        }, 1000);
    })
}

getHeroByIdAsync(1)
    .then(console.log)
    .catch(console.error)



