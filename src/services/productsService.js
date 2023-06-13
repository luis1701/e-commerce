// Products Service file

function getAllProducts() {
    return [
        {
            name: "Pepsi",
            price: 10,
            description: "Pepsi en lata de 500ml",
            image: "https://www.shutterstock.com/image-photo/konotop-ukraine-march-13-2016-260nw-389825848.jpg"   
        },
        {
            name: "Coca cola",
            price: 12,
            description: "Coca cola en lata de 500ml",
            image: "https://media.gettyimages.com/id/458464735/photo/coke.jpg?s=612x612&w=gi&k=20&c=9FZq6IOBojI262sLGAV69nVG5qltuHPWMF9F4nQEFIM="   
        },
        {
            name: "Fanta",
            price: 11,
            description: "Fanta en lata de 500ml",
            image: "https://media.istockphoto.com/id/508584082/photo/fanta-can-on-white.jpg?s=612x612&w=0&k=20&c=obQPF_KvFiSRdfAUAnpMj7DjFebJsPgM0JsLoVtjTqA="   
        },
        {
            name: "Seven",
            price: 15,
            description: "Seven en lata de 500ml",
            image: "https://media.istockphoto.com/id/459257113/photo/7up-naturally-flavored-caffeine-free-soda-can.jpg?s=612x612&w=0&k=20&c=X-XWKZaXYsd5UD6JqsuW5n1HozeblKumfga8qCXIFYk="   
        }
    ]
}

export {
    getAllProducts
}