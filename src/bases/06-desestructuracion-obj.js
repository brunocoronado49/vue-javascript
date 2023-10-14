const person = {
    name: 'Tony',
    age: 32,
    codeName: 'Ironman',
    power: 'money money perra'
}

const {name, age, codeName, power = 'No power mai fren'} = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

const createHero = ({name, age, codeName, power = 'No power mai'}) => ({
    id: 12312,
    name,
    age,
    codeName,
    power
})

console.log(createHero(person))


