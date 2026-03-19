const products = [
  {
    id: "1",
    name: "iphone 12",
    price: 1000,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
    stock: 25,
    description: "Descripcion de Iphone 12",
  },
  {
    id: "2",
    name: "samsung s21",
    price: 800,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
    stock: 16,
    description: "Descripcion de Samsung s21",
  },
  {
    id: "3",
    name: "Ipad 8va generacion",
    price: 1200,
    category: "tablet",
    img: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "4",
    name: "notebook",
    price: 1200,
    category: "computer",
    img: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
    stock: 0,
    description: "Descripcion de Ipad",
  },
  {
    id: "5",
    name: "iphone 14",
    price: 1300,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_937241-MLA52065101895_102022-O.webp",
    stock: 12,
    description: "Descripcion de Iphone 14",
  },
  {
    id: "6",
    name: "xiaomi redmi note 12",
    price: 520,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_630560-MLA54945637761_042023-O.webp",
    stock: 20,
    description: "Descripcion de Xiaomi Redmi Note 12",
  },
  {
    id: "7",
    name: "motorola edge 30",
    price: 640,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_695507-MLA51817079996_102022-O.webp",
    stock: 8,
    description: "Descripcion de Motorola Edge 30",
  },
  {
    id: "8",
    name: "ipad 10a generacion",
    price: 1100,
    category: "tablet",
    img: "https://http2.mlstatic.com/D_NQ_NP_793461-MLA52549662332_112022-O.webp",
    stock: 9,
    description: "Descripcion de iPad 10a generacion",
  },
  {
    id: "9",
    name: "samsung galaxy tab s8",
    price: 1150,
    category: "tablet",
    img: "https://http2.mlstatic.com/D_NQ_NP_760331-MLA49235377585_032022-O.webp",
    stock: 6,
    description: "Descripcion de Galaxy Tab S8",
  },
  {
    id: "10",
    name: "lenovo yoga 7",
    price: 1450,
    category: "computer",
    img: "https://http2.mlstatic.com/D_NQ_NP_713453-MLA45786692718_052021-O.webp",
    stock: 5,
    description: "Descripcion de Lenovo Yoga 7",
  },
  {
    id: "11",
    name: "macbook air m2",
    price: 1700,
    category: "computer",
    img: "https://http2.mlstatic.com/D_NQ_NP_648495-MLA51923010228_102022-O.webp",
    stock: 4,
    description: "Descripcion de MacBook Air M2",
  },
  {
    id: "12",
    name: "dell inspiron 15",
    price: 980,
    category: "computer",
    img: "https://http2.mlstatic.com/D_NQ_NP_969151-MLA52278599673_112022-O.webp",
    stock: 10,
    description: "Descripcion de Dell Inspiron 15",
  },
  {
    id: "13",
    name: "samsung galaxy a54",
    price: 620,
    category: "celular",
    img: "https://http2.mlstatic.com/D_NQ_NP_712909-MLA54945617065_042023-O.webp",
    stock: 18,
    description: "Descripcion de Galaxy A54",
  },
  {
    id: "14",
    name: "ipad mini 6",
    price: 900,
    category: "tablet",
    img: "https://http2.mlstatic.com/D_NQ_NP_996791-MLA47315122373_092021-O.webp",
    stock: 7,
    description: "Descripcion de iPad Mini 6",
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
