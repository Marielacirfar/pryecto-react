
const products =[
    {
        id:"1",
        name: "Ipone 12",
        price: 1000,
        category: "Celulares",
        img:"https://i.blogs.es/35ef0d/iphone-12-pro-max-00-01/1366_2000.jpg",
        stock:25,
        descripcion: "descripcion del Iphone12"

    },
    {
        id:"",
        name: "Asus",
        price: 2000,
        category: "Computadoras",
        img:"https://mexx-img-2019.s3.amazonaws.com/Notebook-Asus-X515EA-Core-i3-4Gb-Ssd-256Gb-15-Win11_45319_1.jpeg",
        stock:10,
        descripcion: "descripcion de computadoras Asus"

    },
    {
        id:"3",
        name: "Lavarropa",
        price: 5000,
        category: "Lavarropas",
        img:"https://www.novogar.com.ar/public/images/productos/producto_829_1.jpg",
        stock:25,
        descripcion: "descripcion del Lavarropa"

    }
]
export const getProducts =()=> {
    return new Promise((resolve)=> {
        resolve (products)
    },500)
}
export const getProductById=(productId)=>{
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod=> prod.id === productId))
        }, 500)
    })
}
