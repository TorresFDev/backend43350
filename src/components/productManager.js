import fs from 'fs'
// /*=============================INICIO ENTREGABLE 2 (APROBADO)============================================*/
export default class ProductManager{
    constructor(){
        this.products=[]
        this.path= './products.json'
        this.format= 'utf-8'
        this.error = undefined
    }
    
    static id = 0
    
    /*agregar productos*/
    addProducts=async(title,description,price,code,stock,thumbnail) => {
        ProductManager.id++
        let newProduct ={id:ProductManager.id,title,description,price,code,stock,thumbnail}
        this.products.push(newProduct)
        // console.log(newProduct)
        await fs.promises.writeFile(this.path,JSON.stringify(this.products, null, "\t"))
    }
    
    /* mostrar productos*/
    showProducts = async() => {
        let show = await fs.promises.readFile(this.path, this.format)
        return JSON.parse(show)
    }
    
    /*trae los productos*/
    getProducts=async() =>{
        let allProducts1 = await this.showProducts()
        return console.log(allProducts1)
    }
    
    /*mostrar los productos por ID*/
    getProductsById=async(id) =>{        
        let allProducts2 = await this.showProducts()
        if(!allProducts2.find((product)=> product.id === id)){
            console.log("Not Found")
        } else{
            console.log(allProducts2.find((product)=> product.id === id))
        }
    };
    
    /*borra los productos por ID*/
    deleteProductsById = async(id) =>{
        let allProducts3 = await this.showProducts()
        let productFilter = allProducts3.filter(products => products.id != id)
        await fs.promises.writeFile(this.path,JSON.stringify(productFilter, null, "\t"))
        console.log( `Delete Product`)
    }
    
    /*editar productos*/
    updateProducts = async({id, ...product}) =>{
        await this.deleteProductsById(id)
        let previousProduct = await this.showProducts();
        let modifiedProduct=[{id, ...product},...previousProduct]
        await fs.promises.writeFile(this.path,JSON.stringify(modifiedProduct, null, "\t"))
        
        
    }
    
}


// const productManager = new ProductManager()
// productManager.addProducts('Rtx 3080ti', 'Placa de video Nvidia',500000,575, 'SI', 'https://m.media-amazon.com/images/I/71itKZcrIfL.jpg')
// productManager.addProducts('Rtx 1050ti', 'Placa de video Nvidia',50000, 570, 'SI', 'https://www.tradeinn.com/f/13743/137432046/msi-geforce-gtx-1050-ti-4gb-gddr5-graphic-card.jpg')
// productManager.addProducts('Rtx 3060', 'Placa de video Nvidia',756780,360, 'SI', 'https://m.media-amazon.com/images/I/71itKZcrIfL.jpg')
// productManager.addProducts('Rtx 3070ti', 'Placa de video Nvidia',963345,448, 'SI', 'https://m.media-amazon.com/images/I/71itKZcrIfL.jpg')
// productManager.addProducts('Rx 6600xt', 'Placa de video AMD',45327,525, 'SI', 'https://m.media-amazon.com/images/I/71itKZcrIfL.jpg')
// productManager.addProducts('Rt 6900', 'Placa de video AMD',800000,501, 'SI', 'https://m.media-amazon.com/images/I/71itKZcrIfL.jpg')





// productManager.getProducts() /*TRAE TODOS LOS PRODUCTOS*/
// productManager.getProductsById(1) /*SOLO TRAE EL ID INDICADO*/
// productManager.deleteProductsById(1) /* ELIMINA EL PRODUCTO INDICADO*/
// productManager.updateProducts(
    //     {
        //     id: 2,
        //     title: 'Rtx 1050ti',
        //     description: 'Placa de video Nvidia',
        //     price: 852840,
        //     code: 570,
        //     stock: 'SI',
        //     thumbnail: 'https://www.tradeinn.com/f/13743/137432046/msi-geforce-gtx-1050-ti-4gb-gddr5-graphic-card.jpg'
        // })/*MODIFICA EL PRODUCTO SIN BORRAR EL ID*/
        
        
        
        
        
        
        
        
        
        
        
        
        
        









/*=========================ENTREGABLE NUMERO 1 (APROBADO))=================================

class ProductManager{
    #products
    #counter
    #error

    constructor(){
        this.#counter = 1
        this.#products=[]
        this.#error = undefined
    }

    getProducts=()=>{
        return this.#products
    }

    getProductsById = (id) => {
        const product = this.#products.find( item => item.id === id)
        if 
            (!product) return 'Not Found'
        else
            return product
    }

    #generateId =() =>{
        return this.#counter++
    }

    #validateProduct = (title,description,price,code,stock,thumbnail)=>{
        if
            (!title || !description || !price  || !code || !stock || !thumbnail){
                this.#error =`[${title}]:Incomplete fields`
        } 

        else{
            const found = this.#products.find( item => item.code === code)
            if (found) this.#error = `[${title}]: Duplicate code`
            else
            this.#error = undefined
        }
    }


    addProducts=(title,description,price,code,stock,thumbnail)=>{
        const id = this.#generateId()
        this.#validateProduct(title,description,price,code,stock,thumbnail)
        if 
            (this.#error === undefined)
            this.#products.push({id,title,description,price,code,stock,thumbnail})
        else
            console.log(this.#error)

    }
}

const productManager = new ProductManager()
productManager.addProducts('Rtx 3080ti', 'Placa de video Nvidia',500000,575, 'SI', 'https://m.media-amazon.com/images/I/71itKZcrIfL.jpg')
productManager.addProducts('Rtx 3060', 'Placa de video Nvidia',200000, 570, 'NO', 'https://http2.mlstatic.com/D_NQ_NP_862892-MLA53332770819_012023-O.jpg')
productManager.addProducts('Rtx 1050ti', 'Placa de video Nvidia',50000, 570, 'SI', 'https://www.tradeinn.com/f/13743/137432046/msi-geforce-gtx-1050-ti-4gb-gddr5-graphic-card.jpg') //  codigo duplicado 'duplicate code'
productManager.addProducts('Rx 6900xt', 'Placa de video AMD',700000,'NO', 'https://mla-s1-p.mlstatic.com/828308-MLA48483861519_122021-F.jpg')  //a este producto le falta el CODE por lo tanto no lo crea 'incomplete fields'

console.log(productManager.getProducts())
// console.log(productManager.products)
console.log(productManager.getProductsById(1))
console.log(productManager.getProductsById(1))
console.log(productManager.getProductsById(1))




================================FIN ENTREGABLE 1(APROBADO)==================================*/