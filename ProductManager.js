const fs = require('fs')
const path = require('path')
class ProductManager{
    constructor(){
        this.filePath = path.join(__dirname,'produtos.json')
        this.id = 1;
    }

    async lerArquivo(){

        try{
            return await fs.promises.readFile(this.filePath, 'utf-8')
        }
        catch{
            return console.log('erro ao ler o arquivo')
        }
    }
    

    async addProduct(objUser){
        let produtos = []
        try{
            const data = await fs.promises.readFile(this.filePath, 'utf-8')
            produtos =  JSON.parse(data)
        }
        catch{
            console.log('erro ao carregar o arquivo / arquivo inexistente')
        }
        objUser.id = objUser.id !== undefined ? objUser.id : (produtos.length + 1);

        produtos.push(objUser)

        try{
            const stringFyProdutos = JSON.stringify(produtos)
            await fs.promises.writeFile(this.filePath, stringFyProdutos)
        }
        catch{
            console.log('erro ao adicionar um produto')
        }
    }

    async getProducts(){
        const data = await fs.promises.readFile(this.filePath, 'utf-8')
        return JSON.parse(data)
    }


    async getProductsId(id){
        const arrayJson = await this.getProducts()
        return arrayJson.find(elements => elements.id == id)
       
    }   

    async updateProduct(id, obj){
        try{
            const produtos = await fs.promises.readFile(this.filePath, 'utf-8')
            const produtosParse = JSON.parse(produtos)
            const index = produtosParse.findIndex(produto => produto.id == id);
            const idObj = produtosParse[index].id
            produtosParse[index] = obj
            produtosParse[index].id = idObj
            const  produtosStringfy = JSON.stringify(produtosParse)
            fs.promises.writeFile(this.filePath, produtosStringfy)
        }
        catch{
            console.log('id nao encontrado')
        }

    }

    async filtrarQtdProdutos(tamanho){
        const data = await this.lerArquivo()
        let array = []
        array = JSON.parse(data)
        return array.slice(0, tamanho)
    }

}
module.exports = ProductManager;
