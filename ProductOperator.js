const ProductManager = require('./ProductManager.js')
const product = new ProductManager()


const user = {
    title: 'teste 1',
    description:'descricao',
    price: 10,
    thumbnail: 'teste thumb',
    code: 10,
    stock: 10
}
const user2 = {
    title: 'teste 2',
    description:'descricao',
    price: 10,
    thumbnail: 'teste thumb',
    code: 10,
    stock: 10
}

const alterar = {
    title: 'alterou',
    description:'descricao',
    price: 10,
    thumbnail: 'teste thumb',
    code: 10,
    stock: 10
}

const notebookDell = {
    "title": "Notebook Dell Inspiron 15",
    "description": "Notebook Dell Inspiron 15 com processador Intel Core i7, 16GB RAM, 512GB SSD.",
    "price": 4500.00,
    "thumbnail": "https://example.com/images/notebook-dell.jpg",
    "code": "DELL-NB-15I7",
    "stock": 25
  };
  
  const smartphoneSamsung = {
    "title": "Smartphone Samsung Galaxy S21",
    "description": "Smartphone Samsung Galaxy S21 com tela de 6.2 polegadas, 128GB de armazenamento, câmera tripla.",
    "price": 3500.00,
    "thumbnail": "https://example.com/images/galaxy-s21.jpg",
    "code": "SAMS-S21-128",
    "stock": 40
  };
  
  const televisaoLG = {
    "title": "Televisão LG 55 polegadas 4K",
    "description": "Smart TV LG de 55 polegadas com resolução 4K UHD, HDR, webOS.",
    "price": 3000.00,
    "thumbnail": "https://example.com/images/lg-55-4k.jpg",
    "code": "LG-TV-55-4K",
    "stock": 15
  };
  
  const foneDeOuvidoSony = {
    "title": "Fone de Ouvido Sony WH-1000XM4",
    "description": "Fone de ouvido sem fio Sony WH-1000XM4 com cancelamento de ruído, até 30 horas de bateria.",
    "price": 1500.00,
    "thumbnail": "https://example.com/images/sony-wh-1000xm4.jpg",
    "code": "SONY-FONE-1000XM4",
    "stock": 50
  };
  

// async function criandoTeste () {
//     await product.addProduct(user)
//     await product.addProduct(user2)
//     await product.addProduct(notebookDell)
//     await product.addProduct(smartphoneSamsung)
//     await product.addProduct(televisaoLG)
//     await product.addProduct(foneDeOuvidoSony)
// }




//   criandoTeste()
//  product.getProducts().then((Element)=>{
//     console.log(Element)
// })

//  product.updateProduct(3,alterar)

//  product.getProductsId(3).then((element)=>{
//      console.log(element)
//  })

 product.lerArquivo().then((elemento)=>{
   console.log(elemento)
   })


//  product.filtrarQtdProdutos(1).then((elemento)=>{
//    console.log(elemento)
//  })