import fs from 'fs'
class ProductManager{
    constructor(){
        this.products=[]
        this.path= './products.json'
        this.format= 'utf-8'
    }

    static id = 0
    
    addProducts=async(title,description,price,code,stock,thumbnail) => {
        ProductManager.id++
        let newProduct ={id:ProductManager.id,title,description,price,code,stock,thumbnail}
        this.products.push(newProduct)
        // console.log(newProduct)
        await fs.promises.writeFile(this.path,JSON.stringify(this.products, null, "\t"))
    }

    getProducts=async() =>{
        let allProducts = await fs.promises.readFile(this.path, this.format)
        console.log(JSON.parse(allProducts))
    }

}


const productManager = new ProductManager
// productManager.addProducts('Rtx 3080ti', 'Placa de video Nvidia',500000,575, 'SI', 'https://m.media-amazon.com/images/I/71itKZcrIfL.jpg')
// productManager.addProducts('Rtx 1050ti', 'Placa de video Nvidia',50000, 570, 'SI', 'https://www.tradeinn.com/f/13743/137432046/msi-geforce-gtx-1050-ti-4gb-gddr5-graphic-card.jpg')

productManager.getProducts()


