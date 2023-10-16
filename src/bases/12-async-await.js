const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('Tenemos un valor en la promesa')
            reject('REJECT en mi promesa')
        }, 2000);
    })
}

const medirTiempoAsync = async() =>{

    try {
        console.log('Inicio')

        const res = await miPromesa()
        console.log(res)

        console.log('Fin')

        return 'Fin de medir tiempo async'
    } catch (error) {
        throw 'Error catch medir tiempo async'
    }
}


medirTiempoAsync()
    .then(console.log)
    .catch(console.log)



