const persona = {
    nombre: 'Bruce',
    apellido: 'Wayne',
    edad: 35,
    direccion: {
        ciudad: 'Gotham City',
        zip: 54454,
        lat: 15.6548,
        lng: 35.12856
    }
}

const persona2 = {...persona}
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)


