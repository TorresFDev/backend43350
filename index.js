class ProductManager{
    constructor(){
        this.products=[]
    }

    getProducts=()=>{
        return this.products
    }

    addProducts=(title,description,price,thumbnail,code,stock)=>{
        this.products.push({title,description,price,thumbnail,code,stock})

    }
}

const productManager = new ProductManager()
productManager.addProducts('Rtx 3080ti', 'Placa de video Nvidia',500000,'insertar imagen', 575, 'si')
console.log(productManager.getProducts())