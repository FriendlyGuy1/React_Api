const productsService = async() => {
    const res = await fetch("https://dummyjson.com/products");
    const result = await res.json();
    return result;
}


export default productsService;