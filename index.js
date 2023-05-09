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