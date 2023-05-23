import express from 'express';
import ProductManager from './components/productManager.js';

const app = express()

const productManager = new ProductManager()
const allProducts = productManager.showProducts()



app.get('/', async (request, response) => {
    response.send("Server On")

})

app.get('/products', async (request, response) => {

    let limit= parseInt( request.query.limit)
    if(!limit) return response.send (await allProducts)

    let timeProduct = await allProducts
    let productLimit = timeProduct.slice(0,limit)
    response.send(await productLimit)

})


app.get('/products/:id', async (request, response) => {
    let id = parseInt(request.params.id)
    let timeProduct = await allProducts
    let productsById = timeProduct.find(product => product.id === id)
    response.send(productsById) 
})

app.listen(8080,() => console.log('Server is running'))
