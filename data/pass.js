function GerarPassword() {
    return Math.random().toString(36).slice(-10)
}
let teste = Array.apply(null, Array(10)).map(GerarPassword)
console.log(teste)