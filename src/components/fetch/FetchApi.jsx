function getEcommerce(){
    fetch('https://fakestoreapi.com/products')
    .then(respuesta => {
        return respuesta.json()
})
    .then((respuestaJSON) => {
        console.log(respuestaJSON)
})
}