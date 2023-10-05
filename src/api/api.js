export const fetchItems = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const res = await data.json();
    return res;
}
