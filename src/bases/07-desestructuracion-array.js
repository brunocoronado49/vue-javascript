const chars = ['batman', 'goku', 'shrek']

const [b, g, s] = chars
const [, , s2] = chars

const [b1, g1, s1, go = 'no value'] = chars

// console.log(b, g, s)
// console.log(s)
// console.log(go)

const returnArray = ([letters, numbers]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray(['xyz', 987])

console.log(letters, numbers)



