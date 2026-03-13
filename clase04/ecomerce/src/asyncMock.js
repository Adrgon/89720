const products = [
  {
    id: "1",
    name: "iphone 12",
    price: 1000,
    category: "celular",
    img: "https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vQXBwbGUtaVBob25lLTEyLTY0R0ItQmx1ZS01Ry1GdWxseS1VbmxvY2tlZC1CLUdyYWRlLVVzZWQtQ2VsbHBob25lXzBkMDk1MWJjLTViNzgtNGRiYy05OTQ5LTNkOWJkMzE5MTE3Ni4wZGE3NWM0MjQzZmJlMjk0ZTNjM2UxOTg0NjU5MWMzZS5qcGVn.jpg",
    stock: 25,
    description: "Descripcion de Iphone 12",
  },
  {
    id: "2",
    name: "samsung s21",
    price: 800,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
    stock: 16,
    description: "Descripcion de Samsung s21",
  },
  {
    id: "3",
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "https://http2.mlstatic.com/D_Q_NP_832655-MLA46432304997_062021-O.webp",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "4",
    name: "notebook",
    price: 1200,
    category: "computer",
    img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
    stock: 0,
    description: "Descripcion de Ipad",
  },
];


export const getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter((prod) => prod.category === categoryId))
        }, 2000)
    })
}

export const getProductoById = (productId) => {
    return new Promise((resolve)=> {
        setTimeout( () => {
            resolve(products.find((prod)=> prod.id === productId))
        }, 2000)
    })
}
