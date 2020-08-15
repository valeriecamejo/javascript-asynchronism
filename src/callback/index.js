function imACallback(data) {
    console.log(data)
}

function makingAnHttpRequest(callback) {
    console.log('Estoy realizando otras operaciones')
    console.log('Ya casi termino')

    callback({
        id: 1,
        username: 'Valerie Camejo',
        age: 25
    })
}

makingAnHttpRequest(imACallback)